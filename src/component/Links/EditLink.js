import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Header from '../Header';
//import RebrandlyApi from '../../sevices/rebrandlyApi';

class EditLink extends Component{
	constructor(props) {
		super(props)

		this.state ={
			id: this.props.match.params.id,
			title:'',
			destination:'',
		}
	}
	alignCenter = {
		height: "100vh",          
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
	render(){
		return(
			<div>
				<Header/>
			<div style={this.alignCenter}>
		
			<Card>
			<CardHeader title={<strong>Edit Form</strong>}/>
			<CardText>
			<TextField
			hintText="Title" 
			type="text"
			value={this.state.title}
			onChange={(e)=> {this.setState({title: e.target.value})}}
			/><br />
			<TextField
			hintText="Destination"
			type="text"
			value={this.state.destination}
			onChange={(e) => {this.setState({destination:e.target.value})}}
			/><br />
			</CardText>
			<CardActions style={{float: "right"}}>
			<RaisedButton label="Submit" primary={true} onClick={()=>this.onSubmit()}/>
			</CardActions>
			</Card>
			</div>
			</div>
			);
	}
	onSubmit(){
		const apikey=sessionStorage.getItem('apikey')
		const data={
			title:this.state.title,
			destination:this.state.destination
		}
	
		fetch ('https://api.rebrandly.com/v1/links/${this.state.id}',{
			method:'POST'	,
			headers:{
				apikey:apikey,
				'Content-Type':'application/json'
			},
			body:JSON.stringify(data)
		})
		.then(response =>{
			if(response.ok){
				response.json()
				.then (links =>{
					this.props.history.push("/link")
				})
			}
			else {
				alert(response.statusText)
			}
		})
		
	}
	componentWillMount() {
		const apikey=sessionStorage.getItem('apikey')
		//console.log(this.props.match.params.id)
		//const id = this.props.match.params.id;
		fetch ('https://api.rebrandly.com/v1/links/${this.state.id}',{
			headers:{
				apikey:apikey
			}
		})
		.then(response =>{
			if(response.ok){
				response.json()
				.then (links =>{
					
				this.setState({
					title: links.title,
					destination:links.destination
				})
				})
			}
			else {
				alert(response.statusText)
			}
		})
	
	}

}

export default EditLink;