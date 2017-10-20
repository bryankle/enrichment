import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cards from '../components/Cards';
import { Menu, Card, Image, Icon, Grid, Button, Divider, Table } from 'semantic-ui-react';
import axios from 'axios';
import UserImage from '../images/user.png';
import StudentDetailEditForm from './StudentDetailEditForm';
import ModalForm from '../components/Modals';


class StudentDetail extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchStudent(id);
    this.props.fetchAllCampus();
  }

	render() {
    console.log("STUDENT DETAIL")
    console.log(this.props)
    if (this.props.student.singleStudent) {

      const { name, campus, email } = this.props.student.singleStudent;

      return(
        <div>
          <Grid.Row columns={2}>
              <Grid.Column>
                <h1>Student Profile</h1>
              </Grid.Column>
          </Grid.Row>
          <Divider />
            <Grid>
              <Grid.Column width={4}>
                <Image src={UserImage} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='2'>{this.props.student.singleStudent.name}</Table.HeaderCell>
                      <Table.HeaderCell colSpan='1'>
                        <ModalForm 
                          header={'Edit a student'}
                          Form={StudentDetailEditForm}
                          type={'edit'}
                          student={this.props.student.singleStudent}
                          allCampuses={this.props.campus.allCampuses}
                        />
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell collapsing colSpan='2'><Icon name='student' /> Campus </Table.Cell>
                      <Table.Cell>{campus ? campus.name : 'Unaffiliated' }</Table.Cell>
                    </Table.Row>
                    <Table.Cell collapsing colSpan='2'><Icon name='mail' /> Email </Table.Cell>
                    <Table.Cell>{this.props.student.singleStudent.email}</Table.Cell>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid>
        </div>
      )
    }
    return <div>Loading</div>
	}
}

function mapStateToProps(state) {
  return {
    student: state.student,
    campus: state.campus
  }
}

export default connect(mapStateToProps, actions)(StudentDetail);

