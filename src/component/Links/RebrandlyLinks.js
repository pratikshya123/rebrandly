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
	links=[
	{
		"title": "Link yem0d",
		"destination": "https://www.youtube.com/watch?v=3VmtibKpmXI",
		"shortUrl": "rebrand.ly/yem0d",
	}
	]
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
    			this.links.map( link => {
    				return(
    				<TableRow>
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
			{
				const apikeysession=sessionStorage.getItem('apikey')
				if(apikeysession){
					this.validapikey(apikeysession)
				.then(response=>{
					if(response){
						this.props.history.push('/link')

					}
				})
				}
			}
		validapikey(apikey){
			return fetch('https://api.rebrandly.com/v1/account',
				{
					headers:{apikey:apikey}
				})
		}


}
export default RebrandlyLinks;