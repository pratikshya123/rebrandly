import React, {Component} from 'react'
//material-ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AccountIcon from './AccountIcon';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false,
			email:''
		};
	}
		 handleToggle = () => this.setState({open: !this.state.open});

		render(){ 
			return (
				<div>
				<AppBar
				title="Rebrandly"
				onLeftIconButtonClick={()=>this.handleToggle()}
				iconElementRight={<AccountIcon email={this.state.email} />}
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
		componentWillMount(){
			this.setState({
				email:sessionStorage.getItem('email')
			})
		}
	
}
export default Header;