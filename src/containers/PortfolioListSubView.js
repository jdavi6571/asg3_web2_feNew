import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb.js';
import '/home/ubuntu/workspace/my-app/src/App.css';

class PortfolioListSubView extends Component {
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
      <BreadCrumb currentPage = "Portfolio" previousPages = {[{path:"/home", caption: "Home"}, {path:"/users", caption: "Users"}]}/>
    </section>
    <div className="columns is-narrow">
      <section className="column is-10">
          <article class="container is-fluid">
          <table class="table is-blush is-bordered is-striped is-narrow is-fullwidth">
        <tr className="header is-blush">
            <th className="symbol is-blush"><strong>Stock Symbol</strong></th> 
            <th className="name is-blush"><strong>Company Name </strong></th>
            <th className="amount is-blush"><strong>Number Owned</strong></th>
            <th className="amount is-blush"><strong>Current Value</strong></th>
        </tr>
            {userPortfolioArray.map(id => 
                <tr> 
                <td> <Link to={"/stock/" + id.symbol}>{id.symbol} </Link>Symbol </td>
                <td> <Link to={"/stock/" + id.symbol}>{id.name} </Link>Name </td>
                <td>{id.amount} </td>
              <td>{id.amount} </td>
                </tr>
        )}           
        </table>              
                    </article>
                 </section>        
                </div>
            </section>
        );
    }
}
export default PortfolioListSubView;
    