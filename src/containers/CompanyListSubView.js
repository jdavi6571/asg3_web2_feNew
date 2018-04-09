

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/home/ubuntu/workspace/my-app/src/App.css';

class CompanyListSubView extends Component {
constructor(props){
    super(props);
    this.state = {
        stocks: this.props.stocks,
        id: this.props.id,
        userPortfolio: this.props.userPortfolio
            };
        }
        
render() {
 var userId = parseInt(this.state.id, 10);  
   let filteredArray = this.state.userPortfolio.filter(id => {
    let user;
       if(id.userId === userId){ user = id;} 
     return user;
});     
         
let userPortfolioArray =[];
      filteredArray.map(id => { 
          return (
         // eslint-disable-next-line 
        this.state.stocks.map(stock => { 
            if(id.symbol === stock.symbol){
                let symbol = stock.symbol;
                let name = stock.name;
                let amount = id.amount;
                let user = {symbol: symbol, name: name, amount: amount};
                userPortfolioArray.push(user);
            }
           })
       )});
         
    userPortfolioArray.sort(function(first,second){ return second.amount - first.amount;});
 return (
   <section>
     <section>
    </section>
    <div className ="container is-flexible">
    <div className="columns is-narrow-mobile">
                  <section className="column is-2">
                  <div class="dropdown">
                    <div class="dropdown-trigger">
                 <button class="button  is-lavender is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu3">
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

                  </section>
      <section className="column is-10 ">
        
          <table class="table is-lavender is-bordered is-striped is-narrow is-fullwidth">
        <tr className="header is-lavender">
            <th className="symbol is-lavender"><strong>Date</strong></th> 
            <th className="name is-lavender"><strong>Low </strong></th>
            <th className="amount is-lavender"><strong>High</strong></th>
            <th className="amount is-lavender"><strong>Close</strong></th>
        </tr>
            {userPortfolioArray.map(id => 
                <tr> 
                <td> <Link to={"/stock/" + id.symbol}>{id.symbol} </Link> </td>
                <td> <Link to={"/stock/" + id.symbol}>{id.name} </Link> </td>
                <td>{id.amount}</td>
                </tr>
        )}           
        </table>              
                   
                 </section>   
        
                </div>
                </div>
            </section>
        );
    }
}
export default CompanyListSubView;
    