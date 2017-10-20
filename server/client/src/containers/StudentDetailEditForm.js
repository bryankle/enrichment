import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Form, Dropdown, Divider } from 'semantic-ui-react';

class StudentForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputNameValue: this.props.student.name,
			inputEmailValue: this.props.student.email,
			selectedCampusId: this.props.student.campusId,
			currentDropdown: this.props.student.campus ? this.props.student.campus.name : 'Unaffiliated'
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
		const studentName = this.state.inputNameValue;
		const email = this.state.inputEmailValue;
		const studentId = this.props.student.id;
		const campusId = this.state.selectedCampusId;
		const campusName = this.state.currentDropdown || this.props.student.campus.name;
		this.props.editStudent(studentId, studentName, email, campusId, campusName)
		this.props.closeModal();
	}

	render() {

		const { allCampuses } = this.props;

		const dropdownContent = allCampuses.map(campus => (
				<Dropdown.Item 
				content={campus.name} 
				key={campus.id}
				{...this.props}
				onClick={() => {
					this.setState({ 
						currentDropdown: campus.name,
						selectedCampusId: campus.id
		 			})}}
				/>)
			)

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
		    		text={this.state.currentDropdown} 
		    		icon='student' floating labeled button className='icon'>
			    	<Dropdown.Menu scrolling>
			           {dropdownContent}
				    </Dropdown.Menu>
			  	</Dropdown>
				<Divider/>
			    <Button type='submit'>Submit</Button>
		    </Form>
		)
	}
}

export default connect(null, actions)(StudentForm);