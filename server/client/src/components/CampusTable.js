import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'semantic-ui-react';
import TableRow from './TableRow';

class CampusTable extends Component {

	render() {
		const { campusId, 
				allStudents, 
				students, 
				addStudent, 
				removeStudent } = this.props;

		const renderTableRows = students
			.filter(student => student.campusId !== null)
			.map((student, idx) => 
					<TableRow 
					idx={++idx}
					student={student} 
					removeStudent={removeStudent}
					/>)

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
					            {allStudents 
					            	? 
					            	allStudents
					            	.filter(student => student.campusId !== campusId )
					            	.map(student => (
						            		<Dropdown.Item 
						            			text={student.name}
						            			onClick={() => addStudent(campusId, student.id, allStudents)}
					            				/>)
				            				) 
					            	:
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