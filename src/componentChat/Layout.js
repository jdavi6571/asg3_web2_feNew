import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'

//chat engine from: https://www.youtube.com/watch?v=84GXJANOYFw
const socketUrl = 
      "https://web3-asg2-chatengine.herokuapp.com/";
export default class Layout extends Component {

	constructor(props) {
	  super(props);
	  var l_user = JSON.parse(localStorage.getItem('user'));
	  this.state = {
	  	socket:null,
	  	user: l_user ? l_user.first_name : null
	  };
	}

	componentWillMount() {
		this.initSocket()
	}

	/*
	*	Connect to and initializes the socket.
	*/
	initSocket = ()=>{
		const socket = io(socketUrl)

		socket.on('connect', ()=>{
			console.log("Connected");
		})

		this.setState({socket})
	}

	/*
	* 	Sets the user property in state
	*	@param user {id:number, name:string}
	*/
	setUser = (user)=>{
		const { socket } = this.state
		socket.emit(USER_CONNECTED, user);
		this.setState({user})
	}

	/*
	*	Sets the user property in state to null.
	*/
	logout = ()=>{
		// eslint-disable-next-line
		const { socket } = this.state
		// eslint-disable-next-line
		socket.emit(LOGOUT)
		// eslint-disable-next-line
		this.setState({user:null})

	}


	render() {
		// eslint-disable-next-line
		const { title } = this.props
		// eslint-disable-next-line
		const { socket, user } = this.state
		return (
			<div className="container">
				{
					!user ?
					<LoginForm socket={socket} setUser={this.setUser} />
					:
					<ChatContainer socket={socket} user={user} logout={this.logout}/>
				}
			</div>
		);
	}
}
