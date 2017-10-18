import React, { Component } from 'react';
import { Menu, Card, Image, Icon, Grid, Button, Modal } from 'semantic-ui-react'
import Modals from './Modals';
import { Link } from 'react-router-dom';

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
		// console.log("CARDS")
		// console.log(this.props)
		const { id, type } = this.props;
		return(
			<Card>
			<Link to={`/${type}/${id}`}>
		      <Image src="http://lorempixel.com/400/200" />
	      	</Link>
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
		          <Button 
		          	basic color='red'
		          	onClick={() => this.props.delete ? this.props.delete(id) : console.log('no function')}
		          	>Delete</Button>
		        </div>
		      </Card.Content>
		    </Card>
		)
	}
}

export default Cards;