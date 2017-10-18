import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Menu, Card, Image, Icon, Grid, Button, Table } from 'semantic-ui-react';

import Cards from '../components/Cards';
import CampusTable from '../components/CampusTable';

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

    if (this.props.campus.singleCampus) {
      console.log("Students belonging to ", this.props.campus.singleCampus.name);
      console.log(this.props.campus.singleCampus.students)
      const { name, students } = this.props.campus.singleCampus;

      return (

        <Grid>
          <Grid.Column width={8}>
            <h1>{name}</h1>
            <Image src='http://lorempixel.com/400/200' />
          </Grid.Column>
          <Grid.Column width={8}>

            <CampusTable students={students} />

          </Grid.Column>
        </Grid>
      )

    }

    return <div></div>
	}
}

function mapStateToProps(state) {
  return {
    campus: state.campus
  }
}

export default connect(mapStateToProps, actions)(CampusDetail);