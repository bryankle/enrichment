import React, { Component } from 'react';
import { Menu, Card, Image, Icon, Grid, Button } from 'semantic-ui-react'

class Student extends Component {
	render() {
		return (
			 <Card.Group itemsPerRow={4}>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
    
     <Card>
      <Card.Content>
        <Image floated='right' size='mini' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>

     <Card>
      <Card.Content>
        <Image floated='right' size='mini' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
    

    
  </Card.Group>
		)
	}
}

export default Student;