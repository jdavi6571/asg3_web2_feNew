import React, { Component } from 'react';
// eslint-disable-next-line 
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
import BreadCrumb from '../components/BreadCrumb.js';
import '../App.css';

class Home extends Component {
constructor(props) {
 super(props);
  this.state = {home: [] };
  }

render() {
 return (
     
     <div>
<section className="hero is-indigo is-medium">
  <div className="hero-body">
    <div className="container">
   <div className="columns is-narrow-mobile">
  <div className="column is-10">
<Link to={ {pathname: "/portfolio"}}><button className="button is-crimsonsky is-large is-fullwidth">Browse Portflio </button></Link>
      </div>
      
</div>
   <div className="columns is-narrow-mobile">
 <div className="column is-three-fifths is-offset-one-fifth">
        <Link to={ {pathname: "/companies"}}><button className="button is-cotton is-large is-fullwidth">Browse Companies </button></Link>
      </div>
      <br/>
</div>
   <div className="columns is-narrow-mobile">
 <div className="column is-three-fifths is-offset-1">
       <Link  to={ {pathname: "/stocks"}}><button className="button is-leaf is-large is-fullwidth">Stock Visualizer </button></Link>
      </div>
</div>

   <div className="columns is-narrow-mobile">
 <div className="column is-two-thirds is-offset-3">
       <Link  to={ {pathname: "/aboutus"}}><button className="button is-powderblue is-large is-fullwidth">About Us </button></Link>
      </div>
      
</div>
<div className="columns is-hidden-mobile">
  <div className="column is-4 is-offset-8">

  <img src="New Project.png" alt="homepage" className="imageEdit"/></div>

</div>

    </div>
  </div>
</section>

     </div>

       );
    }
}

export default Home;