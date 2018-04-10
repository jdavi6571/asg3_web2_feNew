import React, { Component } from 'react';
import axios from 'axios';
import CompanyListSubView from './CompanyListSubView.js';
import CompanySubViewSummary from './CompanySubViewSummary.js';
import BreadCrumb from '../components/BreadCrumb.js';

class SingleCompany extends Component {
    
constructor(props) {
    super(props);
      this.state = {
        id: this.props.match.params.id,
        changeTab: "true",
        stocks: [],
        averagePerMonth: [],
        company: [],
        stockSymbol: "",

      };
    this.changeTabs = this.changeTabs.bind(this);
    }

changeTabs(){ this.setState({ changeTab: !this.state.changeTab }); }
      
componentWillMount() {
     let symbol = this.props.match.params.symbol;
    axios.get("https://web3asg2be.herokuapp.com/companies/stocks/" + symbol)
        .then(response => { this.setState({ company: response.data }); })
        .catch(function (error) { alert('Error with api call ... error=' + error); });
        

    axios.get("https://web3asg2be.herokuapp.com/prices/stocks/average/close/" + symbol)
        .then(response => { this.setState({ averagePerMonth: response.data }); })
        .catch(function (error) { alert('Error with api call ... error=' + error); });
        
        

    var stocks= require("../stocks.json").find(function(element) {return element.symbol === symbol; })
         this.setState({stocks:stocks});
    }
    

  
render() {
    var displayTabs;                
            if (this.state.changeTab ? displayTabs =  
            <CompanySubViewSummary 
                
                id={this.state.id}
                company={this.state.company}
                averagePerMonth={this.state.averagePerMonth} /> 
             :displayTabs =
             <CompanyListSubView 
               id={this.state.id}
                company={this.state.company}
                averagePerMonth={this.state.averagePerMonth}
                stockSymbol={this.state.stocks.symbol} />  ) 
return (
<div>

         <BreadCrumb currentPage = "Single Company" previousPages = {[{path:"/home", caption: "Home"}, {path:"/companies", caption: "Companies"}]}/>
 
   <section class="hero is-cotton is-bold">
  <div class="hero-body"> 
    <div class="container is-narrow-mobile">
     <img alt="Stock" id= "stockImage" src={"/logos/" + this.state.stocks.symbol +".svg"} /> 
      <h1 class="title"> {this.state.stocks.name} </h1>
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
export default SingleCompany;