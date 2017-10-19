import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Checkbox, Form, Dropdown, Divider } from 'semantic-ui-react';

class CampusEditForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputNameValue: '',
			inputEmailValue: '',
			currentDropdown: '',
			selectedCampusId: ''
		}
		this.handleInputName = this.handleInputName.bind(this);
		this.handleInputEmail = this.handleInputEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputName(event) {
		this.setState({ inputNameValue: event.target.value })
	}

	handleInputEmail(event) {
		this.setState({ inputEmailValue: event.target.value })
	}

	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
			    <Form.Field>
			      <label>Student name</label>
			      <input 
			      	onChange={this.handleInputName}
			      	value={this.state.inputNameValue}
			      	placeholder='Enter student name' />
			    </Form.Field>
			    <Form.Field>
			      <label>Email</label>
			      <input 
			      	onChange={this.handleInputEmail}
			      	value={this.state.inputEmailValue}
			      	placeholder='Enter student email' />
			    </Form.Field>
				<Divider/>
			    <Button 
			    	type='submit'
			    	>Submit
		    	</Button>
		    </Form>
		)
	}
}

export default connect(null, actions)(CampusEditForm);