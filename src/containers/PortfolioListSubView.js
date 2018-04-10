import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb.js';
import axios from 'axios';
import '../App.css';

class PortfolioListSubView extends Component {
constructor(props){
    super(props);
        }
        

render() {
 var userId = parseInt(JSON.parse(localStorage.getItem('user')).id, 10);  

 return (
   <section>

    <div className="columns is-narrow">
      <section className="column is-10">
          <article class="container is-fluid">
          <table class="table is-blush is-bordered is-striped is-narrow is-fullwidth">
     <tbody>
        <tr className="header is-blush">
            <th className="symbol is-blush"><strong>Stock Symbol</strong></th> 
            <th className="name is-blush"><strong>Company Name </strong></th>
            <th className="amount is-blush"><strong>Number Owned</strong></th>
            <th className="amount is-blush"><strong>Current Value</strong></th>
        </tr>
            {this.props.portfolioDetails.map(id => 
                <tr> 
                <td> <Link to={"/stock/" + id.symbol}>{id.symbol} </Link></td>
                <td> <Link to={"/stock/" + id.symbol}>{id.name} </Link></td>
                <td>{id.owned} </td>
                <td>{id.owned*15} </td>
                </tr>
            )}
            
            
                
                      </tbody>

        </table>  
                    </article>
                 </section>        
                </div>
            </section>
        );
    }
}
export default PortfolioListSubView;
    