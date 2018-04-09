import React, { Component } from 'react';
// eslint-disable-next-line 
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
import BreadCrumb from '../components/BreadCrumb.js';
import axios from "axios";
import '../App.css';

class Login extends Component {
    //validation script structure from: https://serverless-stack.com/chapters/create-a-login-page.html
    constructor(props) {
        super(props);
            this.state = {
                email: "",
                password: ""
            };
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
                    this.props.history.push('/');
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

export default Login;