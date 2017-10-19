import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cards from '../components/Cards';
import Modals from '../components/Modals';
import { Menu, Card, Image, Icon, Grid, Button } from 'semantic-ui-react';
import axios from 'axios';


class Campus extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchAllCampus();
    // axios.put('/api/campus/remove/3');
    // axios.put('/api/campus/3/add/1');
    console.log('componentDidMount')
    console.log(this.props);
    this.props.addStudent(2, 2);
  }

	render() {
    console.log(this.props);
    const campuses = this.props.campus.allCampuses;
    console.log('campuses', campuses)
    // console.log("campus:", campuses.length)
    const buttonStyle = {
      float: 'right'
    }

		return (
			<div>

        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h1>Browse Campuses</h1>
            </Grid.Column>
           <Grid.Column>
              <Modals />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
           
          </Grid.Row>
        </Grid>

        <Card.Group itemsPerRow={4}>
        {this.props.campus.allCampuses ? 
        campuses.map((campus) => {
          console.log('campus id', campus.id)
          return <Cards
            type={'campus'}
            name={campus.name}
            image={'http://lorempixel.com/400/200'}
            description={'Description goes here'}
            id={campus.id}
            delete={this.props.deleteCampus}
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