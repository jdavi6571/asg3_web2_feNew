import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import HeaderApp from './components/HeaderApp.js';
import AboutUs from './containers/AboutUs.js';
import Home from './containers/Home.js';
import BrowseCompanies from './containers/BrowseCompanies.js';
import SingleCompany from './containers/SingleCompany.js';
import BrowsePortfolio from './containers/BrowsePortfolio.js';
import StockVisualizer from './containers/StockVisualizer.js';
import axios from "axios";
//import Login from './containers/Login.js';
//login scripting from: https://tylermcginnis.com/react-router-protected-routes-authentication/


const fakeAuth = {
  isAuthenticated: false,
  
  authenticate(cb) {
    this.isAuthenticated = true
    //localStorage.setItem('loggedIn',true);
    setTimeout(cb,100)
  },
  
  signout(cb) {
    this.isAuthenticated = false
    //localStorage.setItem('loggedIn',false);
    setTimeout(cb,100)
  },
 
}



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={
        {
          pathname: '/login',
          state: { from: props.location}
        }
      } />
  )} />
);
const HeaderVisible = () => (
     fakeAuth.isAuthenticated === true ? <HeaderApp/> : <div></div>
);


class Login extends React.Component {
      //validation script structure from: https://serverless-stack.com/chapters/create-a-login-page.html
    constructor(props) {
        super(props);
            this.state = {
                email: "",
                password: ""
            };
    }
    
    state = {
      redirectToReferrer: false
    }
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = event => {
        this.setState({
                [event.target.id]: event.target.value
            });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        //login script from: https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
         var apiBaseUrl = "https://web3asg2be.herokuapp.com/users/";
        axios.post(apiBaseUrl + this.state.email + '/' + this.state.password)
        .then(response => {
            if(response.data.code === 200){
                console.log("Login successfull");
                try {
                    fakeAuth.authenticate(() => {
                      this.setState(() => ({
                        redirectToReferrer: true
                      }))
                    })
                    this.props.history.push('/home');
                }
                catch(err){
                    console.log("error" + err);
                }
            }
            else{
                console.log("Unable to login");
                alert("Unable to login");
             }
        })
        .catch(function(error){ alert("Unable to login"); });
    }
    
    render() {
        //template form from: https://dansup.github.io/bulma-templates/templates/login.html
        const {redirectToReferrer} = this.state;
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        
        if (redirectToReferrer === true) {
          return (
            <Redirect to={from} />
          );
        }
        return (
        <section className="hero is-success is-fullheight">
                <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-grey">Login</h3>
                        <p className="subtitle has-text-grey">Please login to proceed.</p>
                        <div className="box">
                            <figure className="avatar">
                                <img src="https://placeimg.com/128/128/tech" alt="Avatar"></img>
                            </figure>
                            <form onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <div className="control">
                                    <input id="email" className="input is-large" type="email" placeholder="Your Email" autoFocus value={this.state.email} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                
                                <div className="field">
                                    <div className="control">
                                    <input id="password" className="input is-large" type="password" placeholder="Your Password" value={this.state.password} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="checkbox">
                                    <input type="checkbox"></input>
                                    Remember me
                                    </label>
                                </div>
                                <button className="button is-block is-info is-large is-fullwidth" type ="submit" disabled={!this.validateForm()}>Login</button>
                            </form>
                        </div>
                        <p className="has-text-grey">
                            <a href="../">Sign Up</a> &nbsp;·&nbsp;
                            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                            <a href="../">Need Help?</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <HeaderVisible />
        <main >
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/login" exact component={Login}/>
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute path="/aboutus" exact component={AboutUs} />
          <PrivateRoute path="/companies" exact component={BrowseCompanies}/>
          <PrivateRoute path = "/company/:symbol" exact component={SingleCompany}/>
          <PrivateRoute path ="/portfolio" exact component={BrowsePortfolio}/>
          <PrivateRoute path="/stocks" exact component={StockVisualizer}/>
        </main>
      </div>
      </Router>
    );
  }
}

export default App;
