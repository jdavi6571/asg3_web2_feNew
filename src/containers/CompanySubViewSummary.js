import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


class CompanyListSubViewSummary extends Component {
constructor(props) {
super(props);
this.state = {
  hideFirstBlock: 'block',
  hideSecondBlock: 'block',
           symbol: "",
           sector: "",
           subIndustry: "",
           address: "",
}; 
this.handleFirstItemChange = this.handleFirstItemChange.bind(this);
}
 
handleFirstItemChange() {
       if(this.state.hideFirstBlock === 'block'){ return this.setState({hideFirstBlock: 'none'}); }
       else{ return this.setState({hideFirstBlock: 'block'}); }
}
    
    
render() {
    const data =  [];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.props.averagePerMonth.map( (stock) => {
      
        let tempName = months[stock._id-1]; 
        let tempValue = stock.avgClose;
        var tempObj = {
          month: tempName,
          averagePrice: tempValue
        };
        data.push(tempObj);
      });
      
   this.props.company.map( (stock) => {
       this.state = {
           symbol: stock.symbol,
           sector: stock.sector,
           subIndustry: stock.subindustry,
           address: stock.address
       };
      });

        
return (
        

        
         
     <section>
    
    
    <div className="columns is-narrow">
    
      
      <section className="column is-4">
          <article class="container is-fluid">
             <article className="message is-lavender">
                 <div onClick = {this.handleFirstItemChange} className="message-header">
                    <strong>Users Address</strong> 
                 </div>
  <div  className="message-body" style={{display: this.state.hideFirstBlock}}>
     <div className="message is-success">
        <div className="message-body">

           <p><strong>Symbol: {this.state.symbol } </strong></p>
               <p><strong>Sector: </strong> {this.state.sector } </p>
                <p> <strong>Sub-Industry: </strong>  {this.state.subIndustry }  </p>
                 <p> <strong>Address: </strong> {this.state.address}  </p>

                  </div>
                 </div>
              </div>
            </article>
        </article>
     </section>
    

   <section className="column is-6 is-narrow-mobile">
   
<BarChart width={730} height={260} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="averagePrice" fill="#FBA100"/>
</BarChart>
          </section>
       
  
  </div>
 </section>
 
 );
 }

}
export default CompanyListSubViewSummary ;