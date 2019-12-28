import { ADD_USER_INFO ,REMOVE_TEST} from '../../../actions';
import axios from 'axios';
export const addUserInfo =(data)=> async dispatch=>{
   
    dispatch({
        type:REMOVE_TEST,
        payload:""
    })

   let value = await axios.post("http://localhost:5000/customer-loyalty",{"query_id":`${data}`});
   dispatch({
       type:ADD_USER_INFO,
       payload:value.data
   })

   console.log("userinfo dispatched");
   
}
