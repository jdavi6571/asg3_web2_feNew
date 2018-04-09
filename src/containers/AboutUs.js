import React, { Component } from 'react';
import BreadCrumb from '../components/BreadCrumb.js';

class AboutUs extends Component {
    
constructor(props) {
   super(props);
    this.state = { portfolios: [] };
 }

render() {
return (
    <section>
      <section>
         <BreadCrumb currentPage = "About Us"  previousPages = {[{path:"/home", caption: "Home"}]}/>
    </section>
               <section class="hero is-powderblue is-narrow-mobile">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <nav class="level is-mobile">
       <h1 class="level-item has-text-centered title is-1">About Us</h1>
    </nav>
      </h1>
    </div>
  </div>
</section>

<br/>
<div class="container is-narrow-mobile">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-aqua">
          <p class="title">Khaled Kabalan </p>
          <p class="subtitle">Back-End</p>
          <div class="content">
       Additional tasks: Dev-Ops and and other Front-End
        </div>
        </article>
        
        <article class="tile is-child notification is-aqua">
          <p class="title">Joel Davies</p>
          <p class="subtitle">Dev-Ops</p>
          <div class="content">
           Additional tasks: Chat, Login and other Front-End
        </div>
        </article>
      </div>
    </div>
    
    <div class="tile is-parent">
      <article class="tile is-child notification is-aqua">
        <p class="title">Jamile Hijazi</p>
        <p class="subtitle">Front-End</p>
        <div class="content">
        </div>
      </article>
    </div>
  </div>
  
  <div class="tile is-parent">
    <article class="tile is-child notification is-dustyrose">
      <div class="content">
        <p class="title">Web Development III</p>
        <p class="subtitle">Assignment #2: MERN</p>
        <div class="content">
      <ul>
       <li>&nbsp; A Mobile Web Application </li>
        <li>&nbsp; CSS Framework: Bulma</li>
        <li>&nbsp; JavaScript UI Framework: React</li>
        <li>&nbsp; React Analytic Charts: Recharts</li>
        <li>&nbsp; Images provided by Randy Connolly</li>
        <li>&nbsp; Color Schemes Inspirations: Canva </li>
         <li>&nbsp; Icons: icon finder </li>
         </ul> 
        </div>
      </div>
    </article>
  </div>
</div>
</div>
</section>
       );
    }
}
export default AboutUs;