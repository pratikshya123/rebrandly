import React, { Component } from 'react';
//Component
import Header from './Header';
import Body from './Body';

class DashBoard extends Component{
	render(){
		return(
			<div>
				<Header />
				<Body/>
			</div>
			)

	}
}
export default DashBoard;