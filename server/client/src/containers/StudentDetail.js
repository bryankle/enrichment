import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Image, Icon, Grid, Divider, Table } from 'semantic-ui-react';
import UserImage from '../images/user.png';
import ModalForm from '../components/Modals';
import StudentDetailEditForm from './StudentDetailEditForm';


class StudentDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchStudent(id);
    this.props.fetchAllCampus();
  }

	render() {
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
                      <Table.HeaderCell colSpan='2'>{name}</Table.HeaderCell>
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
                      { campus 
                        ? <Link to={`/campus/${campus.id}`}>
                            <Table.Cell>{campus.name}</Table.Cell>
                          </Link>
                        : <Table.Cell>Unaffiliated</Table.Cell>
                      }
                    </Table.Row>
                    <Table.Cell collapsing colSpan='2'><Icon name='mail' /> Email </Table.Cell>
                    <Table.Cell>{email}</Table.Cell>
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

