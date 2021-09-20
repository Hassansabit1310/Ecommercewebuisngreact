
import { Button } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { RequestProductList } from '../store/action/setproductlist'
import store from '../store/store'

import '../style/style.css'


const ProductList=()=>{

    const {productList}=useSelector(store=>store.listReducer)

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

    const Check=()=>{
        console.log("hello");
    }

    return(
        <>
       <div class="container-1 wrap" >
       {productList.map((product)=>{
            return(
                <>
               <div class="container-1 wrap" >


  <div class="box-1">
  
                <img src={product.image} style={{height:100,width:100}}/>
                
                <p>{product.title}</p>
                <p>{product.description}</p>

                
               <Button variant="contained" color="primary" onClick={()=>SeeDetails(product._id)}>see details</Button>
            
              

                
                
  </div>

  {/* <Button variant="contained" color="primary" href="#contained-buttons" onClick={()=>SeeDetails(product._id)}> Add to Cart</Button> */}
 

  </div>
  


              
            
                </>
            )
        })}


       </div>
       


       
        
      

        
        
        </>
    )

}

export default ProductList