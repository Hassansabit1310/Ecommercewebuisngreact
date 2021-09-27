import React from 'react'
import { FormControl, Grid, InputLabel, Paper, Select, TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import {useDispatch,useSelector} from 'react-redux'
import RequestCategoryList from '../store/action/getcategoryaction'
import RequestAddUser from '../store/action/adduseraction'
import { Box } from '@material-ui/system'

const AddNewUser=()=>{
    const token = JSON.parse(localStorage.getItem('token'));

    const dispatch=useDispatch()


    const paperStyle={padding:20, height:'90vh',width:280 ,margin:'20px auto'}

    const roles=[{name:"Admin",role:"admin"},{name:"User",role:"user"}]

    const initialValues={
        address: {
            geolocation: {
                lat: "",
                long: ""
            },
            city: "",
            street: "",
            number: 0,
            zipcode: ""
        },
        role: "",
        email: "",
        username: "",
        phone: "",
        password: ""
    }
    const onSubmit=(props)=>{

        console.log("hello");

        const {address,role,email,username,phone,password}=props

        const {geolocation,city,street,number,zipcode}=address
        const {lat,long}=geolocation

        
        dispatch(RequestAddUser(lat,long,city,street,number,zipcode,role,email,username,phone,password,token))

    }

    return(
        <>
         <Grid ali>
        <Paper  elevation={1000} style={paperStyle} >
            <Box p={2}>
            <Formik initialValues={initialValues}  onSubmit={onSubmit}>
            {(props)=>(
                 <Form >
                     <h1>Add User</h1>

                   

                   
                     
                
                 <Field as={TextField } label="Lat"  name='address.geolocation.lat' placehloder='Enter Lat'  fullwidth/>

                 <Field as={TextField }  label="Long"  name='address.geolocation.long' placehloder="Enter Long" fullwidth/>
                 <Field as={TextField }  label="City"  name='address.city' placehloder="Enter City" fullwidth/>
                 <Field as={TextField }  label="Street"  name='address.street' placehloder="Enter Street" fullwidth/>
                 <Field as={TextField }  label="Number"  name='address.number' placehloder="Enter number" fullwidth/>
                 <Field as={TextField }  label="Zipcode"  name='address.zipcode' placehloder="Enter Zipcode" fullwidth/>
                 
                 <Field as="select"   label="Product Name" name="role">
                 {roles.map(role=>(
                             <option  key={role.role} value={role.role}>{role.name}</option>
                            

                         ))}
                  
                 </Field>
                
               
                
                 
                
                 <Field as={TextField}  label="Email" name='email'placehloder="Enter Description" fullwidth/>
                 <Field as={TextField}  label="Username" name='username'placehloder="Enter Description" fullwidth/>
                 <Field as={TextField}  label="Contact Number" name='phone'placehloder="Enter Description" fullwidth/>
                 <Field as={TextField} type='password'  label="Password" name='password'placehloder="Enter Description" fullwidth/>

     
     
     
                 <Button  type='submit' color='primary' variant="contained"  fullWidth >Add User</Button>
                 
                 </Form>

                 

            )}
           

            
        </Formik>
            </Box>
       
        </Paper>

       

        </Grid>
        </>
    )
}
export default AddNewUser