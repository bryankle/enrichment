import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Checkbox, Form, Dropdown, Divider } from 'semantic-ui-react';


class StudentForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputNameValue: this.props.student.name,
			inputEmailValue: this.props.student.email,
			currentDropdown: '',
			selectedCampusId: 0
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

	handleSubmit() {
		console.log('name', this.state.inputNameValue);
		console.log('email', this.state.inputEmailValue);
		const studentName = this.state.inputNameValue;
		const email = this.state.inputEmailValue;

		const studentId = this.props.student.id;
		const campusId = this.state.selectedCampusId;
		console.log('studentName', studentName);
		console.log('email', email);
		console.log('studentId', studentId);
		console.log('campusId', campusId);
		// Action creator goes here
		// this.props.createStudent(studentName, email)
		this.props.editStudent(studentId, studentName, email, campusId)
		this.props.closeModal();
	}


	render() {
		console.log(this.props)

		const dropdownContent = this.props.allCampuses.map((campus) => {
			return <Dropdown.Item 
				content={campus.name} 
				key={campus.id}
				onClick={() => {this.setState({ 
					currentDropdown: campus.name,
					selectedCampusId: campus.id
		 			})}}
				/>
		})

		return(
			<Form onSubmit={
				this.handleSubmit}>
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
			    <Dropdown 
			    		style={{float: 'right'}}
			    		text={this.state.currentDropdown || this.props.student.campus.name} 
			    		icon='student' floating labeled button className='icon'>
				    <Dropdown.Menu scrolling>
			           {dropdownContent}
				    </Dropdown.Menu>
				  </Dropdown>

				<Divider/>
			    <Button 
			    	type='submit'
			    	>Submit</Button>
		    </Form>
		)
	}
}

export default connect(null, actions)(StudentForm);