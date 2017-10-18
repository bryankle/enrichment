import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';


class TableRow extends Component {

	render() {
		return (
			<Table.Row>
                <Table.Cell>No Name Specified</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                <Table.Cell>    
                <Icon fitted name='delete' size='large'/>
                </Table.Cell>
              </Table.Row>
		)
	}
}

export default TableRow;
