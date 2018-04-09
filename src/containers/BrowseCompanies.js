import React, { Component } from 'react'; // eslint-disable-next-line 
import CompanyListItem from '../containers/CompanyListItem.js';
import axios from 'axios';
import '/home/ubuntu/workspace/my-app/src/App.css';
import BreadCrumb from '../components/BreadCrumb.js';

class BrowseCompanies extends Component {
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
    
render() {// eslint-disable-next-line 

 let currentSymbol = this.state.currentStockSymbol;
  return (
         <div>
          <div>
              <BreadCrumb currentPage = "Companies" previousPages = {[{path:"/home", caption: "Home"}]}/>
            </div> 
          <section class="hero is-cotton ">
  <div class="hero-body  is-narrow-mobile">
    <div class="container">
      <h1 class="title">
        <nav class="level is-narrow-mobile">
       <h1 class="level-item has-text-centered title is-1">Browse Companies</h1>
    </nav>
      </h1>
    </div>
  </div>
</section>
<br/>
    
     <div class="columns is-multiline is-centered is-narrow-mobile">
       {this.state.stocks.map( (stock,ind) => {
              let activeClass = "";
                if (stock.symbol === currentSymbol) activeClass = "is-active";
                    return (
                      <CompanyListItem key={stock.symbol} index={ind}
                                            identifier={stock.symbol}
                                            active={activeClass}
                                            select={this.handleSelect} >  

      <article class="container is-one-fifth" id="containerBox">
        <article class=" notification is-lavender">
        
         <section class="hero  is-light is-bold">
         <div class="hero-body">
            <div class="container is-fluid">
            
                     <img alt="Stock" id= "stockImage" src={"/logos/" + stock.symbol +".svg" } /> 
                
                </div>
             </div>
           </section>
             <h3><strong>     {stock.name} </strong></h3> 
         </article>
           
       </article>
  
           </CompanyListItem>)
                })
            }
   
     </div>
</div>
   
        );
     }
}
export default BrowseCompanies;