import React, { Component } from 'react';
import { Icon, Table, Dropdown } from 'semantic-ui-react';
import TableRow from './TableRow';

class CampusTable extends Component {

	render() {
		console.log('CAMPUS TABLE')
		console.log(this.props)

		const { campusId, 
				allStudents, 
				students, 
				addStudent, 
				removeStudent } = this.props;

		const renderTableRows = students.filter(function(student) {
			return student.campusId !== null;
		}).map(function(student, idx) {
			idx++;
			return (<TableRow 
					student={student} 
					idx={idx}
					removeStudent={removeStudent}
					/>
				)
		})

		return (
			<Table celled>
	            <Table.Header>
	              <Table.Row>
	      
	                <Table.HeaderCell>ID</Table.HeaderCell>
	                <Table.HeaderCell>Name</Table.HeaderCell>
	                <Table.HeaderCell>Email</Table.HeaderCell>

	                <Table.HeaderCell>
	                	<Dropdown text='Add student' icon='add user' floating labeled button className='icon'>
						    <Dropdown.Menu>
						      <Dropdown.Header content='Select a student' />
					            {allStudents ? 
					            	allStudents.map((val) => {
					            		const studentId = val.id;
					            		return <Dropdown.Item 
					            			text={val.name}
					            			onClick={() => addStudent(campusId, studentId, allStudents)}
					            			/>
					            	}) :
					            	''}
						    </Dropdown.Menu>
						  </Dropdown>
	                </Table.HeaderCell>

	              </Table.Row>
	            </Table.Header>

	            <Table.Body>
	              {renderTableRows}
	            </Table.Body>
	          </Table>
		)
	}

}

export default CampusTable;