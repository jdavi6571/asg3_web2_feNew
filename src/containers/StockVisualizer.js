import React, { Component } from 'react'; // eslint-disable-next-line 
import axios from 'axios';
import '../App.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend}  from 'recharts';
import BreadCrumb from '../components/BreadCrumb.js';

class StockVisualizer extends Component {
 constructor(props) {
   super(props);
    this.state = {
      currentStockSymbol: 1,
       stocks:[]
        };
    }
    
componentDidMount() {
 axios.get('/stocks.json')
      .then(response => { this.setState({stocks: response.data});})
      .catch(function(error){ alert('Error with api call... error' + error); });
    }
    
handleSelect(key) { this.setState ({currentStockSymbol: key}) } 


    
render() {
const data = [
      {name: '1', stock1: 4000, stock2: 2400, stock3: 2400},
      {name: '2', stock1: 3000, stock2: 1398, stock3: 2210},
      {name: '3', stock1: 2000, stock2: 9800, stock3: 2290},
      {name: '4', stock1: 2780, stock2: 3908, stock3: 2000},
      {name: '5', stock1: 1890, stock2: 4800, stock3: 2181},
      {name: '6', stock1: 2390, stock2: 3800, stock3: 2500},
      {name: '7', stock1: 3490, stock2: 4300, stock3: 2100},
];
  return (
     <div>
              <BreadCrumb currentPage = "Stocks" previousPages = {[{path:"/home", caption: "Home"}]}/>
 
           <section class="hero is-leaf">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <nav class="level is-narrow-mobile">
       <h1 class="level-item has-text-centered title is-1">Stock Visualizer</h1>
    </nav>
      </h1>
    </div>
  </div>
</section>
<br/>
<section>
     <div class="container">
   <div class="columns is-narrow-mobile is-multiline is-centered">
   <div class="column is-3">
                    <div class="dropdown">
                    <div class="dropdown-trigger">
                 <button class="button  is-lavender is-centered is-narrow-mobile is-large is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Select a month</span>
                  <span class="icon is-small">
                   <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                   </button>
                  </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">

            <a href="dg" class="dropdown-item">
                Overview
              </a>
              <a href="sadd" class="dropdown-item">
                 Modifiers
               </a>
    </div>
  </div>
</div>
</div>
  <div class="column  is-2 ">
                    <div class="dropdown">
                    <div class="dropdown-trigger">
                 <button class="button  is-centered is-narrow-mobile is-crimsonsky is-large is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Select a stock</span>
                  <span class="icon is-small">
                   <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                   </button>
                  </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">

            <a href="dg" class="dropdown-item">
                Overview
              </a>
              <a href="sadd" class="dropdown-item">
                 Modifiers
               </a>
    </div>
  </div>
</div>
</div>
  <div class="column  is-2 ">
                   <div class="dropdown">
                    <div class="dropdown-trigger">
                 <button class="button  is-sunshine is-centered is-narrow-mobile is-large is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Select a stock</span>
                  <span class="icon is-small">
                   <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                   </button>
                  </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">

            <a href="dg" class="dropdown-item">
                Overview
              </a>
              <a href="sadd" class="dropdown-item">
                 Modifiers
               </a>
  </div>
</div>
</div>
  </div>
    <div class="column  is-2">
                   <div class="dropdown">
                    <div class="dropdown-trigger">
                 <button class="button  is-powderblue  is-centered is-narrow-mobile is-large is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Select a stock</span>
                  <span class="icon is-small">
                   <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                   </button>
                  </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">

            <a href="dg" class="dropdown-item">
                Overview
              </a>
              <a href="sadd" class="dropdown-item">
                 Modifiers
               </a>
  </div>
</div>
  </div>
  </div>
  </div>
  </div>
  </section>
  <br/>
    <section className="column is-7 is-offset-1 is-centered is-narrow-mobile">
   
	<LineChart width={1125} height={380} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="stock1" stroke="#CF6766" />
       <Line type="monotone" dataKey="stock2" stroke="#FBA100" />
        <Line type="monotone" dataKey="stock3" stroke="#4A8DAC"/>
      </LineChart>
          </section>
       
     </div>
        );
     }
}
export default StockVisualizer;