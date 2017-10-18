import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react';
import TableRow from './TableRow';

class CampusTable extends Component {

	render() {
		console.log('CAMPUSTABLE')
		console.log(this.props.students)
		const { students, removeStudent } = this.props;

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
	                <Table.HeaderCell><Icon fitted name='add user' size='large'/></Table.HeaderCell>
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