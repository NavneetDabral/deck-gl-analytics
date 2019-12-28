import { ADD_LOCATION_INFO} from '../../../actions';
import axios from 'axios';
export const fetchLocations =(data)=> async dispatch=>{
   
   let value = await axios.get("http://localhost:5000/filter-location");
   dispatch({
       type:ADD_LOCATION_INFO,
       payload:value
   })

   console.log("locations dispatched");
   
}
