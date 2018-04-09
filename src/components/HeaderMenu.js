import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderMenu extends Component {

 constructor(props){
       super(props);
        this.state= ({ isActive: "true" });
        this.hideNavbar = this.hideNavbar.bind(this);
    }
    
hideNavbar(){
        this.setState({  isActive: !this.state.isActive}); 
        }

 render(){
     return (
        <nav className="navbar  is-indigo">
  <div className="navbar-brand">
    <div className="navbar-item" > <h3> Firstname Lastname&nbsp;</h3>
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
</nav>
        );
}
               
    
}
export default HeaderMenu;