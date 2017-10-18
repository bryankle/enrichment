import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';


class TableRow extends Component {

	render() {

		const { id, name, email } = this.props.student;
		const { idx, removeStudent } = this.props;
		console.log(this.props)

		return (
			<Table.Row>
                <Table.Cell>{idx}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
               	<Table.Cell>{email}</Table.Cell>
                <Table.Cell>
                	<Icon 
                		fitted name='delete' 
                		size='large'
                		onClick={() => {
                			removeStudent(id);
                		}}
            		/>
            	</Table.Cell>
              </Table.Row>
		)
	}
}

export default TableRow;
