import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RequestUserList from '../store/action/getusersaction'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const UserList=()=>{

    const token = JSON.parse(localStorage.getItem('token'));
    const dispatch=useDispatch()
    const {users}=useSelector(store=>store.getUsersReducer)

    useEffect(()=>{
        dispatch(RequestUserList(token))

    },[])
    return(
        <>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
       {users.map((user)=>{
            return(
                <>
               


  
  
              
        
        
        <Grid xs={2}>
          <Item>
        
                
                <p>{user.email}</p>
                <p>{user.username}</p>
                <p>{user.role}</p>
                <p>{user.phone}</p>
                <Button variant="contained" color="primary">See Details</Button>

                

                
               {/* <Button variant="contained" color="primary" onClick={()=>SeeDetails(product._id)}>see details</Button>
               {user=="admin"?<>
              <Button variant="contained" color="primary" onClick={()=>EditProducts(product._id)}>Edit Product</Button>
               <Button variant="contained" color="primary" onClick={()=>DeleteProducts(product._id)}>see details</Button>
               
               </>:<><Button variant="contained" color="primary" onClick={()=>SeeDetails(product._id)}>see details</Button>
               </>
               
               } */}
            


          </Item>
        </Grid>
        
     


                
            


 

  
  


              
            
                </>
            )
        })}


     
       


</Grid>
    </Box>
       

        </>
    )
}
export default UserList