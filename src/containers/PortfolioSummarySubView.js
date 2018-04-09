import React, { Component } from 'react';
import {PieChart, Pie, Cell} from '/home/ubuntu/workspace/my-app/node_modules/recharts';


class PortfolioSummarySubView extends Component {
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
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}, {name: 'Group E', value: 100}];
const COLORS = ['#99CED4', '#6E7376','#FBA100', '#4A8DAC', '#B6A19E'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

return (
     <section>
     <div class="container">
   <div class="columns is-narrow-mobile is-multiline is-centered">
  <div class="tile is-parent">
    <article class="tile is-child box notification is-indigo">
      <p class="title">Total # of Companies</p>
      <p class="subtitle is-pulled-right">Subtitle</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box notification is-smoke">
      <p class="title">Total # of Stocks</p>
      <p class="subtitle is-pulled-right">Subtitle</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box notification is-aqua">
      <p class="title">Current $ Worth</p>
      <p class="subtitle is-pulled-right">Subtitle</p>
    </article>
  </div>
  </div>
  </div>
  
        <div className="columns is-narrow-mobile">

   <section className="column is-6 is-offset-3">
  <div class="tile is-parent">
    <article class="tile is-child">
    <nav class="level">
  <div class="level-item has-text-centered">
      <p class="title">Percentage Summary</p>
      </div>
      </nav>
       <nav class="level">
  <div class="level-item has-text-centered">
      <p class="subtitle">
      
	<PieChart width={450} height={450} >
        <Pie
        isAnimationActive={false} 
          data={data} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
      </p>
            </div>
      </nav>
    </article>
  </div>


          </section>
       
  
  </div>
 </section>
 
 );
 }

}
export default PortfolioSummarySubView ;