import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router'
import {BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import { LogOut } from '../store/action/logoutaction'



const Profile=()=>{
  const history=useHistory()
  const dispatch=useDispatch()

  const LogOutUser=()=>{
      dispatch(LogOut())
    localStorage.removeItem("user")
    history.push('/home')

  }
    
    return(
        <>
       
      

      <Button onClick={LogOutUser}>Log out</Button>
       
           
           
           
            
        
        
        </>
    )
}
export default Profile