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
	},
	"https": true,
	"favourite": false,
	"creator": {
		"id": "c591e90402b24ca49ff7c2168cd93b17",
		"fullName": "Pratikshya maharjan",
            "avatarUrl": "https://s.gravatar.com/avatar/0755a69884a0998a2cc944f71926bfd5?size=80&d=retro&rating=g"
        },
        "integrated": false
    },
    {
    	"id": "10445597",
    	"linkId": 10445597,
    	"title": "Link ue5ro",
    	"slashtag": "ue5ro",
    	"destination": "https://www.youtube.com/watch?v=3VmtibKpmXI",
    	"createdAt": "2018-04-19T02:14:21.000Z",
    	"updatedAt": "2018-04-19T02:14:21.000Z",
    	"status": "active",
    	"clicks": 0,
    	"isPublic": false,
    	"shortUrl": "rebrand.ly/ue5ro",
    	"domainId": "8f104cc5b6ee4a4ba7897b06ac2ddcfb",
    	"domainName": "rebrand.ly",
    	"domain": {
    		"id": "8f104cc5b6ee4a4ba7897b06ac2ddcfb",
    		"ref": "/domains/8f104cc5b6ee4a4ba7897b06ac2ddcfb",
    		"fullName": "rebrand.ly",
    		"active": true
    	},
    	"https": true,
    	"favourite": false,
    	"creator": {
    		"id": "c591e90402b24ca49ff7c2168cd93b17",
    		"fullName": "Pratikshya maharjan",
    		"avatarUrl": "https://s.gravatar.com/avatar/0755a69884a0998a2cc944f71926bfd5?size=80&d=retro&rating=g"
    	},
    	"integrated": false
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
					headers:{apikey:this.state.apikey}
				})
		}


}
export default RebrandlyLinks;