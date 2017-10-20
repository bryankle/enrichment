import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon } from 'semantic-ui-react';

class TableRow extends Component {

	render() {
		const { id, name, email } = this.props.student;
		const { idx, removeStudent } = this.props;

		return (
			<Table.Row>
                <Table.Cell>{idx}</Table.Cell>
                <Table.Cell>
                    <Link to={`/students/${id}`}>
                        {name}
                    </Link>
                </Table.Cell>
               	<Table.Cell>{email}</Table.Cell>
                <Table.Cell>
                	<Icon 
                		fitted name='delete' 
                		size='large'
                		onClick={() => removeStudent(id) }
            		/>
            	</Table.Cell>
              </Table.Row>
		)
	}
}

export default TableRow;
