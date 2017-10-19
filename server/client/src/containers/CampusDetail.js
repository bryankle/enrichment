import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Menu, Card, Image, Icon, Grid, Button, Table } from 'semantic-ui-react';

import Cards from '../components/Cards';
import CampusTable from '../components/CampusTable';
import StudentDetailEditForm from './StudentDetailEditForm';
import ModalForm from '../components/Modals';

class CampusDetail extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Fetch single campus here
    const id = this.props.match.params.id
    this.props.fetchCampus(id);
    this.props.fetchAllStudents();
  }

	render() {
    console.log("CAMPUS DETAIL")
    console.log(this.props)

    if (this.props.campus.singleCampus) {
      console.log("Students belonging to ", this.props.campus.singleCampus.name);
      const { id, name, students } = this.props.campus.singleCampus;
      const { allStudents } = this.props.student;
      const { addStudent, removeStudent } = this.props;

      console.log("Campus ID is", id)

      return (

        <Grid>
          <Grid.Column width={8}>
            <h1>{name} <Icon style={{float: 'right'}} name='edit' /></h1>
            <Image src='http://lorempixel.com/400/200' />
          </Grid.Column>
          <Grid.Column width={8}>

            <CampusTable 
              campusId={id}
              students={students} 
              allStudents={allStudents}
              addStudent={addStudent}
              removeStudent={removeStudent}
              />

          </Grid.Column>
        </Grid>
      )

    }

    return <div></div>
	}
}

function mapStateToProps(state) {
  return {
    campus: state.campus,
    student: state.student
  }
}

export default connect(mapStateToProps, actions)(CampusDetail);