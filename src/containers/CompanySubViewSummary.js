import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from '/home/ubuntu/workspace/my-app/node_modules/recharts';


class CompanyListSubViewSummary extends Component {
constructor(props) {
super(props);
this.state = {
  hideFirstBlock: 'block',
  hideSecondBlock: 'block',
}; 
this.handleFirstItemChange = this.handleFirstItemChange.bind(this);
}
 
handleFirstItemChange() {
       if(this.state.hideFirstBlock === 'block'){ return this.setState({hideFirstBlock: 'none'}); }
       else{ return this.setState({hideFirstBlock: 'block'}); }
}
    
    
render() {
    
    const data = [
      {month: 'January', averagePrice: 4000},
      {month: 'Febraury', averagePrice: 3000},
      {month: 'March', averagePrice: 2000},
      {month: 'April', averagePrice: 2780},
      {month: 'May', averagePrice: 1890},
      {month: 'June', averagePrice: 2390},
      {month: 'July', averagePrice: 2344},
      {month: 'August', averagePrice: 1234},
      {month: 'September', averagePrice: 5465},
      {month: 'October', averagePrice: 2041},
      {month: 'November', averagePrice: 1500},
      {month: 'December', averagePrice: 2396},
                     
];
        
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
           <p><strong>Symbol: </strong></p>
               <p><strong>Sector: </strong></p>
                <p> <strong>Sub-Industry: </strong>  </p>
                 <p> <strong>Address: </strong> </p>
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