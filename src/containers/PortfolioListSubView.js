import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb.js';
import axios from 'axios';
import '../App.css';

class PortfolioListSubView extends Component {
constructor(props){
    super(props);
    this.state={
            symbol: false,
            name: false,
            owned: false,
            total: false
    };
    
    
        this.compareBy = this.compareBy.bind(this);
        this.sortBy = this.sortBy.bind(this);
  
        }
        
  compareBy(key) { //https://codepen.io/austinlyons/pen/YpmyJB
        if (key === 'name' || key === 'symbol') {
              return function (a, b) {
                if (a[key].toUpperCase() < b[key].toUpperCase()) return -1;
                if (a[key].toUpperCase() > b[key].toUpperCase()) return 1;
                return 0;
              };
            }
     
        else {
               return function (a, b) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            }

        }
    }

    sortBy(key, order) {
        let arrayCopy = this.props.portfolioDetails;
        
        if (this.state.symbol) {
            arrayCopy.reverse();
            this.setState({ symbol: false })
        }
        else {
            arrayCopy.sort(this.compareBy(key));

            this.setState({
                portfolioDetails: arrayCopy,
                symbol: true
            });
        }

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
            <th onClick={() => this.sortBy('symbol')}><a><strong>Stock Symbol</strong></a></th> 
             <th onClick={() => this.sortBy('name')}><u><a><strong>Company Name </strong></a></u></th>
             <th onClick={() => this.sortBy('owned')}><u><a><strong>Number Owned</strong></a></u></th>
            <th onClick={() => this.sortBy('total')}><u><a><strong>Current Value</strong></a></u></th>
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
    