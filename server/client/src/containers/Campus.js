import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cards from '../components/Cards';
import ModalForm from '../components/Modals';
import CampusForm from './CampusForm';
import { Card, Grid } from 'semantic-ui-react';

class Campus extends Component {

  componentDidMount() {
    this.props.fetchAllCampus();
  }

	render() {
    const { allCampuses } = this.props.campus;
 
		return (
			<div>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h1>Browse Campuses</h1>
            </Grid.Column>
           <Grid.Column>
              <ModalForm 
                header={'Add a campus'}
                Form={CampusForm}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
          </Grid.Row>
        </Grid>

        <Card.Group itemsPerRow={4}>
        {allCampuses ? 
        allCampuses.map(campus => (
                  <Cards
                  type={'campus'}
                  name={campus.name}
                  image={'http://lorempixel.com/400/200'}
                  description={'Description goes here'}
                  id={campus.id}
                  deleteCard={this.props.deleteCampus}
                />)) :
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