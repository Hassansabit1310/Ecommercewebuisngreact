import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Grid, Paper, TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'
import { Field, Form, Formik } from 'formik'

import { useSelector } from 'react-redux'
import RequestAddCategory from '../store/action/setcategory'

const AddCategory=()=>{

    const dispatch=useDispatch()
    const {token}=useSelector(store=>store.tokenReducer)

    const initialValues={
        name:'',
        description:'',
        
    
      }
    

    



    
    const paperStyle={padding:20, height:'70vh',width:280 ,margin:'20px auto'}
    const btnStyle={margin:'8px 0'}

    // const [categories,setCategories]=useState( {name: "",
    // description: ""})

    // const AddCategory=(e,key)=>{

    //     setCategories({...categories,[key]:e.target.value})

    //     console.log(categories);
    // }

    const AddCategoryHandler=(props)=>{

        const {name,description}=props

        console.log(props);

      

        dispatch(RequestAddCategory(name,description,token))
        
    }




    return(
        <>
        <Grid>
        <Paper style={paperStyle}>
        <Formik initialValues={initialValues} onSubmit={AddCategoryHandler} >
            <Form >
                
            <Field as={TextField }  name='name'    fullwidth/>
            <Field as={TextField }  name='description'/>



            <Button  type='submit' color='primary' variant="contained" style={btnStyle} fullWidth >Add Category</Button>
            </Form>

            
        </Formik>
        </Paper>

        </Grid>
       
        </>
    )
}

export default AddCategory