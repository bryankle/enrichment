import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Menu, Card, Image, Icon, Grid, Button, Table } from 'semantic-ui-react';

import Cards from '../components/Cards';
import TableRow from '../components/TableRow';

class CampusDetail extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Fetch single campus here
    const id = this.props.match.params.id
    this.props.fetchCampus(id);
  }

	render() {
    console.log(this.props)
		return (


      <Grid>
        <Grid.Column width={8}>
          <h1>{this.props.campus.singleCampus ? this.props.campus.singleCampus.name : ''}</h1>
          <Image src='http://lorempixel.com/400/200' />
        </Grid.Column>
        <Grid.Column width={8}>

          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>
                  <Icon fitted name='add user' size='large'/>

                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>

            </Table.Body>
          </Table>

        </Grid.Column>
      </Grid>
		)
	}
}

function mapStateToProps(state) {
  return {
    campus: state.campus
  }
}

export default connect(mapStateToProps, actions)(CampusDetail);