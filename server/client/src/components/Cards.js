import React, { Component } from 'react';
import { Menu, Card, Image, Icon, Grid, Button, Modal } from 'semantic-ui-react'
import Modals from './Modals';
import { Link } from 'react-router-dom';

class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}

	render() {
		const { id, type, deleteCard } = this.props;
		return(
			<Card>
			<Link to={`/${type}/${id}`}>
		      <Image src="http://lorempixel.com/400/200" />
	      	</Link>
			    <Card.Content>
					<Link to={`/${type}/${id}`}>
				      <Card.Header>
				        {this.props.name}
				      </Card.Header>
			     	</Link>
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
		          	onClick={() => deleteCard ? deleteCard(id) : ''}
		          	>
		          	Delete
		          	</Button>
		        </div>
		      </Card.Content>
		    </Card>
		)
	}
}

export default Cards;