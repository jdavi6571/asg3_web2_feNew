import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class HeaderMenu extends Component {

 constructor(props){
       super(props);
        this.state= ({ isActive: "true" });
        this.hideNavbar = this.hideNavbar.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.logout = this.logout.bind(this);
    }
    
hideNavbar(){
        this.setState({  isActive: !this.state.isActive}); 
        }

getUserName(){
    var user = JSON.parse(localStorage.getItem('user'))
    if(user) {
        return user.first_name + " " + user.last_name   ;
    } else {
        return "No Name Found";
    }
}

logout(e) {
    //this.props.adjustAuth(false);
    localStorage.removeItem('user');
    this.props.history.push('/login');
}

 render(){
     return (
        <nav className="navbar  is-indigo">
  <div className="navbar-brand">
    <div className="navbar-item" > <h3> {this.getUserName()}&nbsp;</h3>
      <img src="user.png" alt="Icon"/> {/** icon from https://www.flaticon.com/free-icon/brainstorm_253654   */}
    </div>        
     <div className={ this.state.isActive ? 'navbar-burger' : 'navbar-burger  is-active' } 
     onClick={this.hideNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
       </div>
  
<div className={this.state.isActive ? 'navbar-menu' : 'navbar-menu is-active'} >
  <div className="navbar-start ">
       <NavLink onClick={this.hideNavbar} className="navbar-item is-hoverable" to={ {pathname: "/home"}}>Home</NavLink>
          <NavLink onClick={this.hideNavbar} className="navbar-item is-hoverable " to={ {pathname: "/portfolio"}}>Portflio</NavLink>
           <NavLink onClick={this.hideNavbar} className="navbar-item is-hoverable " to={ {pathname: "/companies"}}>Companies</NavLink>
          <NavLink onClick={this.hideNavbar} className="navbar-item is-hoverable " to={ {pathname: "/stocks"}}>Stocks</NavLink>
          <NavLink onClick={this.hideNavbar} className="navbar-item is-hoverable " to={ {pathname: "/aboutus"}}>About Us</NavLink>
          
  </div>
  </div>
  <p className="field">
  <a className="button is-indigo">
    <span className="icon is-large">
      <i className="fas fa-bell"></i>
    </span>
  </a>
  <button className="button is-indigo"  onClick={this.logout}>
  <span className="icon is-large">
    <i className="fas fa-power-off"></i>
  </span>
  </button>
</p>
</nav>
        );
}
               
    
}
export default withRouter(HeaderMenu);