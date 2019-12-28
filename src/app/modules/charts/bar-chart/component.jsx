import React  from 'react';
import Charts from '../charts/pie-chart';
import Searchbox from '../../common/search-box';
import Bar from '../charts/bar-chart';
import Loader from '../../common/loader';
const Component =(props)=>{
   
 console.log(props)
 
 let PieRides = props.monthlyDataMapped ? <Charts title="Success vs Cancel "   colors={['#00C853', '#F06292']} chart-data={[['bookings done','count'],['success rides',+props.monthlyDataMapped.total_bookings - +props.monthlyDataMapped.canceled_bookings ],['cancel rides',+props.monthlyDataMapped.canceled_bookings]]} ></Charts>:null;
 let PieMedium =props.monthlyDataMapped ? <Charts title="Online vs mobile "   colors={['#00C853', '#F06292']} chart-data={[['booking medium','count'],['online bookings',+props.monthlyDataMapped.online_bookings],['mobile bookings',+props.monthlyDataMapped.total_bookings - +props.monthlyDataMapped.online_bookings]]} ></Charts>:null;
 let BarChart =props.monthlyDataMapped ? <Bar title="Rides per Day" xaxis="Day" yaxis="Total rides"  chart-data={props.monthlyDataMapped.monthly_bar_desired} ></Bar>:null;

    
  
    return(
      
     <div className="container-type-1">
     
<Searchbox></Searchbox>

{
    
   props.monthlyDataMapped ?
  <div>
    <div className="chart-container">       
          <div>
          {PieRides} 
          </div>
          <div>
          {PieMedium} 
          </div>
   
          </div> 

          <div className="chart-container">
             {BarChart}
          </div>
          </div>:props.loader_flag ?<Loader></Loader>:null
       

  }

     

       
     </div>
     
    )  
}

export default Component;