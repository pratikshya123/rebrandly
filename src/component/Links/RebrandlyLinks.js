import React, { Component } from 'react';

import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';

import Header from '../Header'
class RebrandlyLinks extends Component{
	constructor(props){
		super(props)
		this.state={
			links:[],
		}
	}
	render(){
		return(
			<div>
			<Header/>
			<Table>
			<TableHeader displaySelectAll={false}>
			<TableRow>
			<TableHeaderColumn>Title</TableHeaderColumn>
			<TableHeaderColumn>Destination</TableHeaderColumn>
			<TableHeaderColumn>Short URL</TableHeaderColumn>
			</TableRow>
			</TableHeader>
			<TableBody displayRowCheckbox={false}>
			{
				this.state.links.map( link => {
					return(
					<TableRow key={link.id}>
					<TableRowColumn>{link.title}</TableRowColumn>
					<TableRowColumn>{link.destination}</TableRowColumn>
					<TableRowColumn>{link.shortUrl}</TableRowColumn>
					</TableRow>
					)
				})
			}
			</TableBody>
			</Table>
			</div>
			);
	}
	componentWillMount()
	// 	fetch('https://api.rebrandly.com/v1/links',
	// 	{
	// 		headers:{apikey:sessionStorage.getItem('apikey')}
	// 	})

	// 	.then(res=>{
	// 		if(res.ok){
	// 			res.json()
	// 			.then(data=>{
	// 				this.setState({
	// 					links:data
	// 				})
	// 			})
	// 		}
	// 	})


	// }
	{
		const apikeysession=sessionStorage.getItem('apikey')
		debugger
		if(apikeysession){

			this.validapikey(apikeysession)
			.then(res=>{
			if(res.ok){
				res.json()
				.then(data=>{
					this.setState({
						links:data
					})
				})
			}
		})
		}
	}
	validapikey(apikey){
		return fetch('https://api.rebrandly.com/v1/links',
		{
			headers:{apikey:apikey}
		})

	}


}
export default RebrandlyLinks;