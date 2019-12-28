import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      padding:theme.spacing(10),
      color:"#283593",
      fontSize:"12px",
      fontWeight:"700",
      borderRadius:"0.4em"
    },
    input: {
      display: 'none',
    },
  }));
  
let Component=(props) => {
    const classes = useStyles();
    const[file ,setFile]=useState(null);
    const[filename ,setFileName]=useState(null);


const onChangeHandler=event=>{

  console.log(event.target.files[0]);  
  setFile(event.target.files[0]);
  let file_event=document.querySelector("#file-handler");
  setFileName( file_event.value.split('\\').pop());  
  

  
}
  
const onClickHandler = (e) => {
  e.preventDefault();
   console.log(file);
  const data = new FormData()
  data.append('my-file',file)
  axios.post("http://localhost:5000/upload-csv/data", data)
  .then((res)=>{
       console.log(res);
  })

}

props.fetchLocationsMapped();


  return (   
         <div className="file-upload">
              
              <form>
              <label for="file">Choose file</label>
              <input name="my-file" type="file" id="file-handler" onChange={onChangeHandler}></input>
              
           <Button  onClick={onClickHandler}  variant="contained" color="primary">
             Upload
           </Button>
              </form>
              <div id="filenameContainer"> {filename}</div>
         
     
        
        </div>

  );
  }

  export default Component;