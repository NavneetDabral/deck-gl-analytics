import React ,{useState} from 'react';
import Charts from '../charts/pie-chart';
import Button from '@material-ui/core/Button';
import Deck from '../deck-layer-arc';

const Component =(props)=>{
  
const [userid ,setUserId]=useState(null);
  
   
   let addUser =(e)=>{
       setUserId(e.target.value);
   }
   
   let handleClick =()=>{
    props.addUserInfoMapped(userid);
   }
   console.log(userid);
  
   let PieRides = props.userDataMapped.userInfo ? <Charts title="Success vs Cancel "   colors={['#00C853', '#F06292']} chart-data={[['bookings done','count'],['success rides',+props.userDataMapped.userInfo.total_bookings - +props.userDataMapped.userInfo.canceled_bookings ],['cancel rides',+props.userDataMapped.userInfo.canceled_bookings]]} ></Charts>:null;
   let PieMedium =props.userDataMapped.userInfo ? <Charts title="Online vs mobile "   colors={['#00C853', '#F06292']} chart-data={[['booking medium','count'],['online bookings',+props.userDataMapped.userInfo.online_bookings],['mobile bookings',+props.userDataMapped.userInfo.total_bookings - +props.userDataMapped.userInfo.online_bookings]]} ></Charts>:null;
   let Deckarc =props.userDataMapped.userInfo ?   <Deck></Deck>:null; 
    
    return(
     <div className="container-type-1">
     
       <div className="select-custom">
        <span>
         <input id="input" onChange={addUser} placeholder="Enter user id" type="text"></input>   
        </span>   
       </div> &nbsp;&nbsp;&nbsp;
       <span id="search-logo" onClick={handleClick}>
       <Button variant="contained" color="primary">
        Analyse
       </Button>
       </span>
      
         <h3 style={{width:"100%",textAlign:"center",color:"#757575",fontWeight:"600"}}>Customer behaviour analysis</h3>
     
       
        

       <div className="chart-container">
          
       <div>
       {PieRides} 
       </div>
       <div>
       {PieMedium} 
       </div>

       </div>

       {Deckarc}
      
     
       

       
     </div>
     
    )  
}

export default Component;