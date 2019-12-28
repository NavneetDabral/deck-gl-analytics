import React from 'react';
import { Chart } from "react-google-charts";
const Graph = (props) => { 
    
console.log(props);

let Chart_data =props['chart-data'];
console.log(Chart_data);
let title= props.title;
let colors=props.colors;
return(
          <div className="charts">
 
        <div>
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={
     Chart_data
  }
 
  options={{
    title: title,
    colors: colors
        }}
        
  rootProps={{ 'data-testid': '1' }}
/>

        </div>

          </div>
            
    
)

};

export default Graph;