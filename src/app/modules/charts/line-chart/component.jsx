import React from 'react';
import { Chart } from "react-google-charts";
const Graph = (props) => { 
    


return(
          <div className="charts">
 
        <div>
        <Chart
        width={'100%'}
        height={'300px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['x', 'Transactions', 'Settlements'],
            [0, 0, 0],
            [1, 10, 5],
            [2, 23, 15],
            [3, 17, 9],
            [4, 18, 10],
            [5, 9, 5],
            [6, 11, 3],
            [7, 27, 19],
        ]}
        options={{
            hAxis: {
            title: 'Time',
            },
            vAxis: {
            title: 'Popularity',
            },
            series: {
            1: { curveType: 'function' },
            },
            animation: {
            startup: true,
            easing: 'linear',
            duration: 1500,
            },
        }}
        chartEvents={[
            {
            eventName: 'animationfinish',
            callback: () => {
                console.log('Animation Finished')
            },
            },
        ]}
        rootProps={{ 'data-testid': '2' }}
        />

        </div>

          </div>
            
    
)

};

export default Graph;