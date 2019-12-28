import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import $ from 'jquery'; 
import Arrow_down from '../../../assets/arrow.png';
const useStyles = makeStyles(theme => ({
  
  button: {
    margin: theme.spacing(0),
  },
  input: {
    display: 'none',
  },
  list:{
    width:"250px",
    margin:"0"
  },
    
    buttonpop:{
    fontSize:"11px",
    fontWeight:"700",
    borderRadius:"0px",
    width:"200px",
    margin:"0 5px",
      '&:hover':{
        background:"none",
      },
      '&:active':{
        background:"none"
      },
      transition:"width 2s"
    },
    searchbox:{
      opacity:0.6,
      transition:"all 1s",
      '&:focus':{
        opacity:1
      }
    }

}));

const Searchbox = (props) =>{
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
 const [search_value, setSearchValue] = React.useState("Select month");
 const map_values ={
  "JAN":1,
  "FEB":2,
  "MAR":3,
  "APR":4,
  "MAY":5,
  "JUN":6,
  "JUL":7,
  "AUG":8,
  "SEP":9,
  "OCT":10,
  "NOV":11,
 }
 function handleClick(event) {
   setAnchorEl(event.currentTarget);
   $(".arrow-icons").addClass("arrowup")
 }

 function handleClose() {
   setAnchorEl(null);
     $(".arrow-icons").removeClass("arrowup")
 }
 
 let changeSearch=(value)=>{
   console.log(value);
   setSearchValue(value);
    setAnchorEl(null);
   $(".arrow-icons").removeClass("arrowup")
   props.fetchDataMapped(map_values[value]);
  
 }

const search_parameters =["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG",
"SEP","OCT","NOV"];
let getdata= search_parameters.map( (value) => {
  return( 
<ListItem value={value} className={classes.list} onClick={()=> changeSearch(value)}  button>
 <ListItemText primary={value} />
</ListItem>
  )
    
});


 const open = Boolean(anchorEl);
 const id = open ? 'simple-popover' : undefined;

   return(
     <div className="select-custom">
      <Button aria-describedby={id} size="large"  className={classes.buttonpop} onClick={handleClick}>
       {search_value} &nbsp;
       <img src={Arrow_down}  className="arrow-icons iconsarrw" alt="arrow_down" />
     </Button>
  <Popover
       id={id}
       open={open}
       anchorReference="anchorPosition"
       anchorPosition={{ top: 100, left: 100 }}
       anchorEl={anchorEl}
       onClose={handleClose}
       className={classes.pop}
       anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'center',
       }}
       transformOrigin={{
         vertical: 'top',
         horizontal: 'center',
       }}
     >
        
      {
        getdata
      }        
     </Popover>
       </div>
   
   ) 

}

export default Searchbox;
