import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cards from '../components/Cards';
import { Menu, Card, Image, Icon, Grid, Button } from 'semantic-ui-react';
import axios from 'axios';


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
    console.log(this.props)
		return (
			<div>
        {this.props.student.singleStudent ? this.props.student.singleStudent.name : ''}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps, actions)(StudentDetail);

