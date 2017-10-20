import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react';
import TableRow from './TableRow';

class StudentTable extends Component {

	render() {
		const { students } = this.props;
		const renderTableRows = students.map((student, idx) => {
			return <TableRow student={student} idx={++idx}/>
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

export default StudentTable;