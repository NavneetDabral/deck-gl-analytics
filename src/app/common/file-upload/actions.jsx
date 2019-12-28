  import { ADD_COLUMNS ,ADD_LOCATION_INFO} from '../../../actions'
  import axios from 'axios';
  
  export const addNoOfColumn =(data)=> dispatch=>{

    console.log("dispatched no of col");
   dispatch({
       type:ADD_COLUMNS,
       payload:data

       })

 }
export const fetchLocations =(data)=> async dispatch=>{
   
   let value = await axios.get("http://localhost:5000/filter-location");
   dispatch({
       type:ADD_LOCATION_INFO,
       payload:value
   })

   console.log("locations dispatched");
   
}