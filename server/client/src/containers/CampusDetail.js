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
    const id = this.props.match.params.id
    this.props.fetchCampus(id);
  }

	render() {
    console.log(this.props)
		return (
			<div>
        {this.props.campus.singleCampus ? this.props.campus.singleCampus.name : ''}
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