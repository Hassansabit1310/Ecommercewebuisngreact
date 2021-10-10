import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RequestGetMyCart from '../store/action/mycartaction'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const MyCart=()=>{

    const token = JSON.parse(localStorage.getItem('token'));

    const {mycart}=useSelector(store=>store.getMyCartReducer)

    const {products}=mycart
    console.log(products);



    const dispatch=useDispatch()


    useEffect(
        ()=>{

            dispatch(RequestGetMyCart(token))
            console.log("hello");
            

        },[]
    )

    return(
        <>{products?<>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
       {products.map((product)=>{
            return(
                <>
               


  
  
              
        
        
        <Grid item xs={2}>
          <Item>
          <img src={product.productId.image} style={{height:100,width:100}}/>
                
                <p>Product:{product.productId.title}</p>
                <p>Description:{product.productId.description}</p>
                <p>Number of Quantity Ordered:{product.quantity}</p>

                
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
        
        
        
        </>:<>

        <p>Currently you don't have any products in you cart</p>
        
        
        </> }
        
        </>
    )

}

export default MyCart