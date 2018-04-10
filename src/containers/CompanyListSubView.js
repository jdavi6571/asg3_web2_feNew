import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const MonthItem = (props) => {
    return (
        <a className="dropdown-item" value={props.month_value} onClick={() => {props.setActiveMonth(props.month,props.month_value)}}>
            {props.month}
        </a>
    );
};


class CompanyListSubView extends Component {
constructor(props){
    super(props);
    console.log(this.props.stockSymbol);
    this.state = {
        isActive: "false",
        stockInformation: [],
        id: this.props.id,
        currentActiveMonth:"Select a month",
        currentMonthValue: 0, 
        symbol: this.props.stockSymbol
            };
        this.hideDropDown = this.hideDropDown.bind(this);
        this.changeCurrentMonth = this.changeCurrentMonth.bind(this);
        }
    
    changeCurrentMonth(month,monthValue) {
        this.setState({  currentActiveMonth: month, currentMonthValue: monthValue}); 
         axios.get("https://web3asg2be.herokuapp.com/prices/stocks/" + this.state.symbol +"/" + monthValue)
            .then(response => { this.setState({ stockInformation: response.data }); console.log(response); })
            .catch(function (error) { alert('Error with api call ... error=' + error); });
    }
    
    hideDropDown(){
        this.setState({  isActive: !this.state.isActive}); 
    }
    
render() {
 var userId = parseInt(JSON.parse(localStorage.getItem('user')).id, 10);  
 var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
 var monthItems = months.map((month,i) => {
    return <MonthItem month={month} month_value={i+1} setActiveMonth={this.changeCurrentMonth}/> ;
 });

    //userPortfolioArray.sort(function(first,second){ return second.amount - first.amount;});
 return (
   <section>
     <section>
    </section>
    <div className ="container is-flexible">
        <div className="columns is-narrow-mobile">
          <section className="column is-2">
            <div className={this.state.isActive ? 'dropdown' : 'dropdown is-active'}>
                <div class="dropdown-trigger">
                    <button class="button  is-lavender is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={this.hideDropDown}>
                        <span>{this.state.currentActiveMonth}</span>
                        <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div class="dropdown-content">
                        {monthItems}
                    </div>
                </div>
            </div>
        </section>
        <section className="column is-10 ">
            <table class="table is-lavender is-bordered is-striped is-narrow is-fullwidth">
                <tbody>
                    <tr className="header is-lavender">
                        <th className="symbol is-lavender"><strong>Date</strong></th> 
                        <th className="name is-lavender"><strong>Low </strong></th>
                        <th className="amount is-lavender"><strong>High</strong></th>
                        <th className="amount is-lavender"><strong>Close</strong></th>
                    </tr>
                    {this.state.stockInformation.map(id => 
                        <tr> 
                            <td> {id.date} </td>
                            <td> {id.low} </td>
                            <td>{id.high}</td>
                            <td>{id.close}</td>
                        </tr>
                    )}   
                </tbody>
            </table>              
        </section>   
        </div>
    </div>
    </section>
        );
    }
}
export default CompanyListSubView;
    