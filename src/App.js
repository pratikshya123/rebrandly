import React, { Component } from 'react';

//import Header from './component/Header';
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//router
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import DashBoard from './component/DashBoard'
import Login from './component/Login';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider> 
        
        <BrowserRouter>
        	<Switch>
        		<Route path="/login" component={Login} /> 
        		<Route exact path="/" render={()=>(<Redirect to="/Login"/>)}/>
        		<Route path="/dashboard" component={DashBoard} />
        	</Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>
    );
  }
}

export default App;
