import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import { Route, Switch, useHistory } from 'react-router'
import {BrowserRouter as Router, Link, NavLink } from 'react-router-dom'

import AddCategory from './addcategory'
import '../style/style.css'


const ShowDashboad=()=>{
  const history=useHistory()

  const LogOutUser=()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("token")

    history.push('/')

  }
    
    return(
        <>
        <div class="container-2">
          <div class="box-2">
          <NavLink className="nav-link" to="/addcat" exact>
        <i 
                className="far fa-plus-square">
                </i>Add Category
          </NavLink>
           </div>
         
          <div class="box-2">

          <NavLink className="nav-link" to="/addprod" exact>
        <i 
                className="far fa-plus-square">
                </i>Add Products

        </NavLink>
         </div>
         
         
          <div class="box-2">
          <NavLink className="nav-link" to="/catlist" exact>
        <i 
                className="fa fa-list-alt">
                </i>Categories

        </NavLink>
        </div>
        
         
          

         
          <div class="box-2">
          <NavLink className="nav-link" to="/adduser" exact>
          <i class="fa-solid fa-user-plus"></i>Add User

        </NavLink>
         </div>
          
          
          
          <div class="box-2">
          <Button variant="contained" size="small" color="primary" onClick={LogOutUser}>Log out</Button>
          </div>
          
          
        </div>

       

       
      
        


       
      {/* <Link to='/addcat'>Add Category</Link> */}
      
      {/* <Link to='/catlist'>Categories</Link> */}

      {/* <IconButton color="primary" aria-label="Logout">
        <LogoutIcon/>
      </IconButton> */}

     
       
           
           
           
            
        
        
        </>
    )
}
export default ShowDashboad