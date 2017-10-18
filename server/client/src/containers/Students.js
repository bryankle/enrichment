import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Menu, Card, Image, Icon, Grid, Button } from 'semantic-ui-react'
import Cards from '../components/Cards';

class Student extends Component {

  componentDidMount() {
    this.props.fetchAllStudents();
  }

	render() {

    console.log(this.props);

    const students = this.props.student;
    console.log(students);
		return (
			 <div>
        <Card.Group itemsPerRow={4}>
        {students.length > 0 ? 
        students.map(function(student) {
          return <Cards
            name={student.name}
            campus={student.cam}
            image={'http://lorempixel.com/400/200'}
            description={'Description goes here'}
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