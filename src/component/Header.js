import React, {Component} from 'react'
//material-ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
	}
		 handleToggle = () => this.setState({open: !this.state.open});

		render(){ 
			return (
				<div>
				<AppBar
				title="Rebrandly"
				onLeftIconButtonClick={()=>this.handleToggle()}

				/>
				<Drawer
				open={this.state.open}
				docked={false}
				onRequestChange={()=>this.handleToggle()}
				>
				
				<MenuItem>Menu Item</MenuItem>
				<MenuItem>Menu Item 2</MenuItem>
				</Drawer>
				</div>
				)
		}
	
}
export default Header;