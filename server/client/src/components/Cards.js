import React, { Component } from 'react';
import { Menu, Card, Image, Icon, Grid, Button, Modal } from 'semantic-ui-react'
import Modals from './Modals';

// Refactor to functon later

class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}

	handleEditButton() {

	}

	render() {
		return(
			<Card>
			
		      <Image src="http://lorempixel.com/400/200" />
			    <Card.Content>
			      <Card.Header>
			        {this.props.name}
			      </Card.Header>
			      <Card.Meta>
			        <span className='date'>
			          Description
			        </span>
			      </Card.Meta>
			      <Card.Description>
			        {this.props.description}
			      </Card.Description>
    			</Card.Content>
		      <Card.Content extra>
		        <div className='ui two buttons'>
		          <Modals />
		          <Button basic color='red'>Delete</Button>
		        </div>
		      </Card.Content>
		    </Card>
		)
	}
}

export default Cards;