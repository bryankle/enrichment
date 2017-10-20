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
    const { id } = this.props.match.params
    this.props.fetchCampus(id);
    this.props.fetchAllStudents();
  }

	render() {
    if (this.props.campus.singleCampus) {
      const { id, name, students } = this.props.campus.singleCampus;
      const { allStudents } = this.props.student;
      const { addStudent, removeStudent } = this.props;

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

    return <div>Loading...</div>
	}
}

function mapStateToProps(state) {
  return {
    campus: state.campus,
    student: state.student
  }
}

export default connect(mapStateToProps, actions)(CampusDetail);