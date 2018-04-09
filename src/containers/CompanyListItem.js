import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyListItem extends Component {
   handlerSelectStocks = (key) => { this.props.select(key); }
     render() {
       let classes = "panel-block";
        classes += this.props.active;
        return( 
            <Link className={classes} 
                  to={"/company/" + this.props.identifier}
                  key={this.props.identifier}>{this.props.children}
           </Link>
        )
    }
}
export default CompanyListItem;