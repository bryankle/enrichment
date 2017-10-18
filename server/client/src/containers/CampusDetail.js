import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cards from '../components/Cards';
import { Menu, Card, Image, Icon, Grid, Button } from 'semantic-ui-react';
import axios from 'axios';


class CampusDetail extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Fetch single campus here
    this.props.fetchCampus(1);
  }

	render() {
    console.log(this.props)
		return (
			<div>
        CampusDetail
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    campus: state.campus
  }
}

export default connect(mapStateToProps, actions)(CampusDetail);