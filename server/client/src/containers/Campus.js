import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cards from '../components/Cards';
import { Menu, Card, Image, Icon, Grid, Button } from 'semantic-ui-react';
import axios from 'axios';


class Campus extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchAllCampus();
    this.props.fetchCampus(1)
  }

	render() {
    console.log(this.props);
    const campuses = this.props.campus.allCampuses;
    console.log('campuses', campuses)
    // console.log("campus:", campuses.length)


		return (
			<div>
        <Card.Group itemsPerRow={4}>
        {this.props.campus.allCampuses ? 
        campuses.map(function(campus) {
          return <Cards
            name={campus.name}
            image={'http://lorempixel.com/400/200'}
            description={'Description goes here'}
          />
        })
        :
         ''}
        </Card.Group> 
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    campus: state.campus
  }
}

export default connect(mapStateToProps, actions)(Campus);