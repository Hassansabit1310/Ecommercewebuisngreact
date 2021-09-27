import React, { useEffect } from 'react'
import { useRef } from 'react'

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { blue, red } from '@material-ui/core/colors';
import './App.css'
import { Avatar, Button, Typography } from '@material-ui/core';
import { white } from 'color-name';
import { useDispatch, useSelector } from 'react-redux';
import SetLoginData from '../services/auth.service'
import { useHistory } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Link } from '@material-ui/core';
import  { Formik,Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import AuthHeader from '../services/auth-header';
import RequestMyDetail from '../store/action/getmydetailaction';


const AdminLogin=()=>{

 
 
  

  const paperStyle={padding:20, height:'70vh',width:280 ,margin:'20px auto'}
  const avatarStyle={backgroundColor: '#728FCE'}
  const btnStyle={margin:'8px 0'}
  
  const initialValues={
    Email:'',
    Password:'',
    remember:false

  }
  const validationSchema=Yup.object().shape({
    Email:Yup.string().email('please enter a valid email').required("This field is required"),
    Password:Yup.string().required("required")
  })
  
  
  const {loginData}=useSelector(store=>store.loginReducer)
  const {userInfo}=loginData

  
  
  
  const {message}=loginData
  const history=useHistory()
  const emailInput=useRef()
  const passwordInput=useRef()
  const dispatch=useDispatch()

   
      
     
     
    
     
       useEffect(()=>{
        
        
        const user = JSON.parse(localStorage.getItem('user'));

        switch (user) {
          case "admin":
            history.push('/dashboard')
            
            break;
          case "user":
            history.push('/home')
            break;  
        
          default:
            history.push('/login')
            break;
        }
        

       

       },[loginData])

      
      const onSubmit=(props,values)=>{


        const {Email,Password}=props
        dispatch(SetLoginData(Email,Password))
       
        
       
       
        
       
        
         


        setTimeout(() => {
          
          values.resetForm()
          
        }, 2000);

        


      }
      




    

    return(
        <>

        <Grid>

          <Paper elevation={300} style={paperStyle}>

            <Grid align='center'>
            <Avatar style={avatarStyle}> <LockIcon/> </Avatar>
            <h2>Sign In</h2>


            </Grid>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props)=>(
                <Form>
                  
                  <Field  as={TextField}  label='Email' name='Email' placeholder='Enter Your Mail Address' fullWidth required helperText={<ErrorMessage name='Email'/>}/>
            
            <Field as={TextField}  label='Password' name='Password' placeholder='Enter The Password' type='password' fullWidth required helperText={<ErrorMessage name='Password'/>}/>

            <Field as={FormControlLabel} 

            name='remember'
        control={
          <Checkbox
          
           
            color="primary"
          />
        }
        label="Remember Me"
      /> <Button  type='submit' color='primary' variant="contained" fullWidth style={btnStyle} disabled={props.isSubmitting}>{props.isSubmitting?"Loading":"Sign in"}</Button>
      
                </Form>
              )}
            </Formik>
       <Typography>
       <Link href="#" >
    Forgot Your Password?
  </Link>
  

       </Typography>
       <Typography>
       Do you have an account ?
       <Link href="#" >
       create one
  </Link>
  

       </Typography>
            
            <h4>{message}</h4>

          </Paper>


        </Grid>



        {/* <div  className={classes.root}>
      <Grid container spacing={3}>
          
        <Grid item xs={12}>
          <div  className={classes.div}>
          <form>
              <label>
                  Admin Login
              </label>
            
            <label>
        
                <TextField InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }} id="outlined-helperText" helperText="Please Enter Your Mail" label="Email" variant="outlined" inputRef={emailInput} />
                
                </label>
        <label>
           
        <TextField InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
    id="outlined-helperText" helperText="Please Enter Your Password"  label="Password" variant="outlined" margin="normal" inputRef={passwordInput} />
        </label>
        <label>
            <Button onClick={LoginSubmitHandler} variant="contained" color="primary" href="#contained-buttons">Login</Button>
        </label>
        
        </form>
              
          </div>
        </Grid>
       
      </Grid>
    </div> */}




        
            
        
        
        
        </>

    )

}
export default AdminLogin