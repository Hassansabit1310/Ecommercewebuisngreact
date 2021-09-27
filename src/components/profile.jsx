import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router'
import {BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import RequestMyDetail from '../store/action/getmydetailaction'
import { LogOut } from '../store/action/logoutaction'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 20,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:'70vh',
  width:500,
  margin:'20px auto'
  
}));



const Profile=()=>{
  const {token}=useSelector(store=>store.tokenReducer)
  const {detail}=useSelector(store=>store.getDetailReducer)
 
  
  const history=useHistory()
  const dispatch=useDispatch()
  
  useEffect(()=>{

    dispatch(RequestMyDetail(token))

  },[])

  const LogOutUser=()=>{
      dispatch(LogOut())
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    history.push('/home')

  }
    
    return(
        <>


<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <p>My Profile</p>
            <p>Role:{detail?.role}</p>
            <p>City:{detail.address?.city}</p>
            <p>Street:{detail.address?.street}</p>
            <p>Email:{detail?.email}</p>
            <p>Uername:{detail?.username}</p>

          </Item>
        </Grid>
        
      </Grid>
    </Box>
      

      <Button onClick={LogOutUser}>Log out</Button>
       
           
           
           
            
        
        
        </>
    )
}
export default Profile