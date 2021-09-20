import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import './App.css'
import { Avatar, Button, Typography } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';


import  { Formik,Form, Field, ErrorMessage } from 'formik'
import  RequestSignUP  from '../services/auth.service';
import axios from 'axios';


const SignUp=()=>{

 
 
  

  const paperStyle={padding:20, height:'70vh',width:280 ,margin:'20px auto'}
  const avatarStyle={backgroundColor: '#728FCE'}
  const btnStyle={margin:'8px 0'}
  
  
  
  const initialValues={
    Email:'',
    User_Name:'',
    Password:'',
    First_Name:'',
    Last_Name:''

  }
 
  
  
  
  

  const history=useHistory()
 
  const dispatch=useDispatch()

   
      const onSubmit=(props,values)=>{


        const {Email,User_Name,Password,First_Name,Last_Name}=props
        

        axios.post("http://localhost:8080/signup",{
          email:Email ,
          username:User_Name,
          password:Password,
          firstname:First_Name,
          lastname:Last_Name
        })

       
        
       
       
        
       
        
         


        setTimeout(() => {
          
          values.resetForm()
          
        }, 2000);

        


      }
      




    

    return(
        <>

        <Grid>

          <Paper elevation={1000} style={paperStyle}>

            <Grid align='center'>
            
            <h2>Sign Up</h2>


            </Grid>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {(props)=>(
                <Form>
                  
                  <Field  as={TextField}  label='Email' name='Email' placeholder='Enter Your Mail Address' fullWidth required />
                  <Field  as={TextField}  label='Username' name='User_Name' placeholder='Enter User Name' fullWidth required />
            
            <Field as={TextField}  label='Password' name='Password' placeholder='Enter The Password'  fullWidth required/>

            <Field as={TextField}  label='First Name' name='First_Name' placeholder='Enter First Name'  fullWidth required />
            <Field as={TextField}  label='First Name' name='Last_Name' placeholder='Enter Last Name'  fullWidth required />
            <Field as={TextField}  label='City' name='City' placeholder='Enter City Name'  fullWidth required />
            <Field as={TextField}  label='Street' name='Password' placeholder="Street"  fullWidth required />
            <Field as={TextField}  label='Phone Number' name='Phone Number' placeholder='Enter Your Phone Number'  fullWidth required />


             <Button  type='submit' color='primary' variant="contained" fullWidth style={btnStyle} >Sign Up</Button>
      
                </Form>
              )}
            </Formik>
      
  

      
            
            

          </Paper>


        </Grid>



        



        
            
        
        
        
        </>

    )

}
export default SignUp