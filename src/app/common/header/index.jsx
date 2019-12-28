import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 


    
const Component = (props) =>{
    
    return(
   
        <div className="header">
            <div>
            <Link  to='/'>Home</Link></div> 
            <div>
              <nav>
               <Link activeStyle={{color:"#00C853" ,borderColor:"#00C853",opacity:1}}  to='/analytics'>Analytics</Link>
               <Link activeStyle={{color:"#00C853",borderColor:"#00C853" ,opacity:1}}  to='/locations'>locations</Link>
              </nav>
              </div>  
            <div> 
            <nav>
            <Link style={{border:"none"}} activeStyle={{color:"#00C853",opacity:1}}  to='/user-loyalty'>
            
            <AccountCircleIcon style={{fontSize:"30px"}}></AccountCircleIcon>
           
          </Link>
            </nav>
           </div>  

        </div>

    )

}

export default Component;
