import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<Menu size='huge'>
				<Link to='/home'>
		        <Menu.Item 
		        	name='home' 
		        	onClick={this.handleItemClick} 
		        	/>
	        	</Link>
	        	<Link to='/campus'>
		        <Menu.Item 
		        	name='campus' 
		        	onClick={this.handleItemClick} 
		        	/>
	        	</Link>
	        	<Link to='/students'>
		        <Menu.Item 
		        	name='students' 
		        	onClick={this.handleItemClick} 
		        	/>
	        	</Link>
	      	</Menu>
		)
	}
}

export default Navbar;