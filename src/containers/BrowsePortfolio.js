import React, { Component } from 'react';
import axios from 'axios';
 // eslint-disable-next-line
import PortfolioListSubView from './PortfolioListSubView.js';
import PortfolioSummarySubView from './PortfolioSummarySubView.js';
import BreadCrumb from '../components/BreadCrumb.js';

class BrowsePortfolio extends Component {
    
constructor(props) {
    super(props);
      this.state = {
        //id: this.props.match.params.id,
        id: JSON.parse(localStorage.getItem('user')).id,
        changeTab: "true",
        stocksOwned: [],
        portfolioDetails: [],
        stocks: []
      };
    this.changeTabs = this.changeTabs.bind(this);
    console.log(JSON.parse(localStorage.getItem('user')).id);
    }

changeTabs(){ this.setState({ changeTab: !this.state.changeTab }); }

        
        componentDidMount() {
                axios.get("https://web3asg2be.herokuapp.com/portfolio/percentage/" + this.state.id)
        .then(response => {
        this.setState({
            stocks: response.data }); })
        .catch(function (error) { alert('Error with api call ... error=' + error); });
        
            
            axios.get("https://web3asg2be.herokuapp.com/portfolio/user/" +  this.state.id)
        .then(response => { 
            this.setState({ stocksOwned : response.data,
                          portfolioDetails: response.data})
        
                axios.get("https://web3asg2be.herokuapp.com/companies/all")
                 .then(response => { 
                     this.setState({ companies : response.data })
                  
                   let portfolio = [];

        this.state.portfolioDetails.forEach(function (arrayItem) {
            response.data.forEach(function (arrayItem2) {
                if (arrayItem.symbol === arrayItem2.symbol) {
                    let stockInfo = {name: arrayItem2.name,
                                     symbol: arrayItem2.symbol,
                                     owned: arrayItem.owned}
                    
                    portfolio.push(stockInfo);
                }
            });
        });
            this.setState({ portfolioDetails: portfolio });
            
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });        
                
            
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });

        }
        
  
render() {

    var displayTabs;                
            if (this.state.changeTab ? displayTabs =  
                <PortfolioSummarySubView 
                id={this.state.id}
                stocks= {this.state.stocks}
                stocksOwned = {this.state.stocksOwned}
               />
       
             :displayTabs =
      
               <PortfolioListSubView
                id={this.state.id}
                stocks={this.state.stocks} 
                stocksOwned = {this.state.stocksOwned}
                companies = {this.state.companies}
                portfolioDetails = { this.state.portfolioDetails } 
                
                />  

        
           ) 
return (
<div>

         <BreadCrumb currentPage = "Portfolio" previousPages = {[{path:"/home", caption: "Home"}]}/>
 
           <section class="hero is-crimsonsky is-narrow-mobile">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <nav class="level is-mobile">
       <h1 class="level-item has-text-centered title is-1">Browse Portfolio</h1>
    </nav>
      </h1>
    </div>
  </div>
</section>
 <br/>
         
    <div className="tabs is-boxed">
     <ul>
        <li className={ this.state.changeTab ? 'one is-active' : 'one '}  onClick={this.changeTabs}>
            <a>
            <span className="icon is-small"><i class="fas fa-building"></i></span>
            <span>Summary Sub-View</span>
            </a>
      </li>
            
      <li className={ this.state.changeTab ? 'two' : 'two is-active'}  onClick={this.changeTabs}>
            <a>
            <span className="icon is-small"><i className="fas fa-list-alt"></i></span>
            <span>List Sub-View</span>
             </a>
        </li>
     </ul>
</div>
<div className='container_item'> {displayTabs} </div>
</div>
      )
    }
}
export default BrowsePortfolio;