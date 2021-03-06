import React, { Component } from 'react';
 // eslint-disable-next-line
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import HeaderMenu from './components/HeaderMenu.js';
import AboutUs from './containers/AboutUs.js';
import Home from './containers/Home.js';
import BrowseCompanies from './containers/BrowseCompanies.js';
import SingleCompany from './containers/SingleCompany.js';
import BrowsePortfolio from './containers/BrowsePortfolio.js';
import StockVisualizer from './containers/StockVisualizer.js';
import Login from './containers/Login.js';
import Layout from './componentChat/Layout';
import axios from "axios";
 // eslint-disable-next-line
import ChatInterface from './containers/ChatInterface.js';
//import Login from './containers/Login.js';
//login scripting from: https://tylermcginnis.com/react-router-protected-routes-authentication/
//chat structure from: https://medium.freecodecamp.org/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a


const PrivateRoute = ({ component: Component, authed,...rest }) => (
  <Route {...rest} 
  render={(props) => (authed === true
      ? <Component {...props} />
      : <Redirect to={
        {
          pathname: '/login',
          state: { from: props.location}
        }
      } />
  )} />
);

class App extends Component {
  constructor(props) {
      super(props);
      var user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.state = {
          authed:true
        };
      } else {
          this.state = {
              authed:false
          };
      }
  }
  
  adjustAuthStatus(value) {
      this.setState({authed:value});
      console.log("changed");
  }
  
  render() {
    return (
          <div>
            {this.state.authed === true ? <HeaderMenu  authAdjust={this.adjustAuthStatus.bind(this)}/> : <div></div>}
            <main >
              <PrivateRoute path="/" exact component={Home} authed={this.state.authed}/>
              <Route path="/login"  render={(routeProps) => (
                    <Login {...routeProps} authAdjust={this.adjustAuthStatus.bind(this)} authed={this.state.authed}/> )}/>
              <PrivateRoute path="/home" exact component={Home} authed={this.state.authed}/>
              <PrivateRoute path="/aboutus" exact component={AboutUs} authed={this.state.authed}/>
              <PrivateRoute path="/companies" exact component={BrowseCompanies} authed={this.state.authed}/>
              <PrivateRoute path = "/company/:symbol" exact component={SingleCompany} authed={this.state.authed}/>
              <PrivateRoute path ="/portfolio" exact component={BrowsePortfolio} authed={this.state.authed}/>
              <PrivateRoute path="/stocks" exact component={StockVisualizer} authed={this.state.authed}/>
              <PrivateRoute path="/Chat" exact component={Layout} authed={this.state.authed}/>
            </main>
          </div>
    );
  }
}

export default App;
