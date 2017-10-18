import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cards from '../components/Cards';
import { Menu, Card, Image, Icon, Grid, Button } from 'semantic-ui-react';
import axios from 'axios';


class SingleCampus extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
  }

	render() {

		return (
			<div>
        
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, actions)(SingleCampus);