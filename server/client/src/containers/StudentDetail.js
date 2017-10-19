import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cards from '../components/Cards';
import { Menu, Card, Image, Icon, Grid, Button, Divider, Table } from 'semantic-ui-react';
import axios from 'axios';
import UserImage from '../images/user.png';


class StudentDetail extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Fetch single campus here
    const id = this.props.match.params.id
    this.props.fetchStudent(id);
  }

	render() {
    console.log("STUDENT DETAIL")
    console.log(this.props)

    if (this.props.student.singleStudent) {
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
          <Icon style={iconStyle} name='edit' /> 
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing colSpan='2'>
          <Icon name='student' /> Campus
        </Table.Cell>
        <Table.Cell>{this.props.student.singleStudent.campus.name}</Table.Cell>

      </Table.Row>
      <Table.Cell collapsing colSpan='2'>
          <Icon name='mail' /> Email
        </Table.Cell>
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
const iconStyle = {
  float: 'right'
}
function mapStateToProps(state) {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps, actions)(StudentDetail);

