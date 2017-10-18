import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Menu, Card, Image, Icon, Grid, Button } from 'semantic-ui-react'
import Cards from '../components/Cards';

class Student extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

	render() {

    console.log(this.props);

    const students = this.props.student.allStudents;
		return (
			 <div>
        <Card.Group itemsPerRow={4}>
          {this.props.student.allStudents ? 
          students.map((student) => {
            console.log(student);
            return <Cards
              name={student.name}
              image={'http://lorempixel.com/400/200'}
              description={student.campus ? student.campus.name : 'Unaffiliated'}
              id={student.id}
              delete={this.props.deleteStudent}
            />
          })
          :
           ''}
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