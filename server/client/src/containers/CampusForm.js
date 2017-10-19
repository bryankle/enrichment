import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';


class CampusForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputNameValue: '',
			inputImgUrlValue: ''
		}
		this.handleInputName = this.handleInputName.bind(this);
		this.handleImgUrlValue = this.handleImgUrlValue.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputName(event) {
		this.setState({ inputNameValue: event.target.value })
	}

	handleImgUrlValue(event) {
		this.setState({ inputImgUrlValue: event.target.value })
	}

	handleSubmit() {
		console.log('name', this.state.inputNameValue);
		console.log('link', this.state.inputImgUrlValue);
		this.props.closeModal();
	}

	render() {
		return(
			<Form onSubmit={
				this.handleSubmit}>
			    <Form.Field>
			      <label>Campus Name</label>
			      <input 
			      	onChange={this.handleInputName}
			      	value={this.state.inputNameValue}
			      	placeholder='Enter campus name' />
			    </Form.Field>
			    <Form.Field>
			      <label>Image Photo</label>
			      <input 
			      	onChange={this.handleImgUrlValue}
			      	value={this.state.inputImgUrlValue}
			      	placeholder='Enter URL' />
			    </Form.Field>
			    <Button 
			    	type='submit'
			    	>Submit</Button>
		    </Form>
		)
	}
}

export default CampusForm;