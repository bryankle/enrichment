import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, Grid, Divider } from 'semantic-ui-react'
import Cards from '../components/Cards';
import ModalForm from '../components/Modals';
import StudentForm from './StudentForm';


class Student extends Component {

  componentDidMount() {
    this.props.fetchAllStudents();
  }

	render() {

    const { allStudents } = this.props.student;
		return (
			 <div>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h1>Students</h1>
            </Grid.Column>
           <Grid.Column>
              <ModalForm 
                header={'Add a student'}
                Form={StudentForm}
              />      
            </Grid.Column>
          </Grid.Row>
          <Divider/>
        </Grid>

        <Card.Group itemsPerRow={4}>
          {allStudents ? 
          allStudents.map(student => (
                    <Cards
                      type={'students'}
                      name={student.name}
                      image={'http://lorempixel.com/400/200'}
                      description={student.campus ? student.campus.name : 'Unaffiliated'}
                      id={student.id}
                      deleteCard={this.props.deleteStudent}
                    />)
                  ) : ''}
        </Card.Group> 
      </div>
		)
	}
}

function mapStateToProps(state) {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps, actions)(Student);