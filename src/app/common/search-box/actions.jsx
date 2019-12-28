import {ADD_MONTHLY_DATA ,LOADER_FLAG, REMOVE_MONTHLY_DATA} from '../../../actions';
import axios from 'axios';
export const fetchData =(data)=> async dispatch=>{
   
   dispatch({
       type:LOADER_FLAG,
       payload:""

   }) 
   dispatch({
    type:REMOVE_MONTHLY_DATA,
    payload:""

}) 
   let value = await axios.post("http://localhost:5000/filter-data",{"data":`${data}`});
   dispatch({
       type:ADD_MONTHLY_DATA,
       payload:value.data
   })

   dispatch({
    type:LOADER_FLAG,
    payload:""

}) 

   console.log("monthly data dispatched");
   
}
