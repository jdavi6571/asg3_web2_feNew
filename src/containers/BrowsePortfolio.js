import React, { Component } from 'react';
import axios from 'axios';
import PortfolioListSubView from './PortfolioListSubView.js';
import PortfolioSummarySubView from './PortfolioSummarySubView.js';
import BreadCrumb from '../components/BreadCrumb.js';

class BrowsePortfolio extends Component {
    
constructor(props) {
    super(props);
      this.state = {
        id: this.props.match.params.id,
        changeTab: "true",
        user: [],
        userPortfolio: [],
        stocks: [],
        address: [],
        company: [],
        geo: []
      };
    this.changeTabs = this.changeTabs.bind(this);
    }

changeTabs(){ this.setState({ changeTab: !this.state.changeTab }); }
      
componentWillMount() {
    axios.get("/userStockPortfolio.json")
        .then(response => { this.setState({ userPortfolio: response.data }); })
        .catch(function (error) { alert('Error with api call ... error=' + error); });

 let symbol = this.props.match.params.symbol;
    var stocks= require("../stocks.json").find(function(element) {return element.symbol === symbol; })
         this.setState({stockSymbol:stocks});
    }
    
    
componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users/" + this.state.id)
        .then(response => {
        this.setState({
            user: response.data,
            address: response.data.address,
            company: response.data.company,
            geo: response.data.address.geo }); })
        .catch(function (error) { alert('Error with api call ... error=' + error); });
        
    axios.get("/stocks.json")
        .then(response => { this.setState({ stocks: response.data }); })
        .catch(function (error) { alert('Error with api call ... error=' + error); }); }
  
render() {
    var displayTabs;                
            if (this.state.changeTab ? displayTabs =  
                   <PortfolioSummarySubView 
                id={this.state.user.id}
                name={this.state.user.name}
                username={this.state.user.username}
                email={this.state.user.email}
                phone={this.state.user.phone}
                website={this.state.user.website}
                street={this.state.address.street}
                suite={this.state.address.suite}
                city={this.state.address.city}
                zipcode={this.state.address.city}
                lat={this.state.geo.lat}
                lng={this.state.geo.lng}
                companyName={this.state.company.name}
                catchPhrase={this.state.company.catchPhrase}
                bs={this.state.company.bs} />
       
             :displayTabs =
               <PortfolioListSubView 
                id={this.state.id}
                name={this.state.user.name}
                userPortfolio={this.state.userPortfolio}
                stocks={this.state.stocks} /> 
            
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