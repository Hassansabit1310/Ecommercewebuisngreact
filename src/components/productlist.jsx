
import { Button } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { RequestProductList } from '../store/action/setproductlist'
import store from '../store/store'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import '../style/style.css'
import axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const ProductList=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
   
    console.log(user)
    const {productList}=useSelector(store=>store.listReducer)
    const {title}=productList
    
    console.log(productList.title);

    const history=useHistory()
    

    console.log("productList");
    console.log(productList);
    console.log("productList");

    

    

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(RequestProductList())
        

    },[])

    const SeeDetails=(id)=>{
    history.push(`/product-details/${id}`)
    console.log("hello");


    }

    const EditProducts=(id)=>{
        history.push(`/edit-product/${id}`)

    }

    const DeleteProducts=(id)=>{
        axios.delete(`http://localhost:8080/products/${id}`,
        {
            headers:{
    
                authorization: `bearer ${token}`
            }
       
            
        }
        ).then(
         window.location.reload())
    }

    return(
        <>

       
        <Grid container >
            <Box sx={{flexGrow:1}}>
            <Grid item xs={12}>
                <Item>
                
                 <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={productList}
  getOptionLabel={(option)=>option.title}
  onChange={(event, value) =>history.push(`/product-details/${value._id}`) } 
  
  
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>


               
                </Item>
            </Grid>
            </Box>
            
        </Grid>
            
             <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
       {productList.map((product)=>{
            return(
                <>
               


  
  
              
        
        
        <Grid item xs={2}>
          <Item>
          <img src={product.image} style={{height:100,width:100}}/>
                
                <p>{product.title}</p>
                <p>{product.description}</p>

                
               {/* <Button variant="contained" color="primary" onClick={()=>SeeDetails(product._id)}>see details</Button> */}
               {user=="admin"?<>
              <Button variant="contained" color="primary" onClick={()=>EditProducts(product._id)}>Edit Product</Button>
               <Button variant="contained" color="primary" onClick={()=>DeleteProducts(product._id)}>see details</Button>
               
               </>:<><Button variant="contained" color="primary" onClick={()=>SeeDetails(product._id)}>see details</Button>
               </>
               
               }
            


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

export default ProductList