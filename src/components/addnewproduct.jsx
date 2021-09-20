
import React, { useState,useEffect } from 'react'
import { FormControl, Grid, InputLabel, Paper, Select, TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import {useDispatch,useSelector} from 'react-redux'
import RequestCategoryList from '../store/action/getcategoryaction'
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import store from '../store/store'
import RequestAddprouct from '../store/action/addproduct'

const AddProduct=()=>{

  const paperStyle={padding:20, height:'70vh',width:280 ,margin:'20px auto'}



    const {token}=useSelector(store=>store.tokenReducer)


    const{categoryList}=useSelector(store=>store.categoryReducer)

    const dispatch=useDispatch()

    const [photo,setPhoto]=useState("")
    
    const initialValues={
        title:" ",
    price: " ",
    description:" ",
    image:" ",
    stock: 0,
    category: {
        _id:"",
    }
    
      }

      useEffect(
          ()=>{

            dispatch(RequestCategoryList())


          },[]
      )
      
      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

      const UploadImage=async (e)=>{
          const file=e.target.files[0]
          const photos=await convertBase64(file)
          setPhoto(photos)
         
      }
     

      const onSubmit=(props)=>{

        const {image,title,price,description,stock,category}=props
        const {_id}=category
         const product_price=parseInt(price)
        

        dispatch(RequestAddprouct(title, product_price, description,photo,stock,_id,token))

       


      }
      
    
    return(
        <>
        <p>hello</p>
         <Grid ali>
        <Paper elevation={1000} style={paperStyle} >
        <Formik initialValues={initialValues}  onSubmit={onSubmit}>
            {(props)=>(
                 <Form >

                   

                   
                     
                
                 <Field as={TextField } label="Product Name"  name='title' placehloder='Enter Product Name'  fullwidth/>
                 <Field as={TextField }  label="Price"  name='price' placehloder="Enter Price" fullwidth/>
                 <Field as={TextField}  label="Description" name='description'placehloder="Enter Description" fullwidth/>
                 <input type="file" label="select category"  name='Image' onChange={e=>{UploadImage(e)}} />
                 <Field as={TextField}  label="Stock" name='stock'placehloder="Enter Description"fullwidth/>
                <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Field as={Select}   label="Product Name" name="category._id">
                 {categoryList.map(category=>(
                         <option   key={category._id} value={category._id}> {category.name}</option>
                     ))}
                 </Field>
                </FormControl>
                
                 
                 {/* <select  name='catagory._id'>
                    
                     {categoryList.map(category=>(
                         <option  key={category._id} value={category._id}>choose one --{category.name}</option>
                     ))}
                     
                     

                 </select>
                 */}

     
     
     
                 <Button  type='submit' color='primary' variant="contained"  fullWidth >Add Category</Button>
                 
                 </Form>

                 

            )}
           

            
        </Formik>
        </Paper>

       

        </Grid>
        
        </>
    )
}
 export default AddProduct


    