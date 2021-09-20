import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'



import { useDispatch } from 'react-redux'
import GetProductDetails from '../store/action/getproductdetailsaction'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'




const ProductDetails=()=>{
    const user = JSON.parse(localStorage.getItem('user'));

    const {isLoggedin}=useSelector(store=>store.loginStatusReducer)

    const {product}=useSelector(store=>store.getProductReducer)

    const {id}=useParams()
    const history=useHistory()
    const dispatch=useDispatch()
   
    

    // const [loading,setLoading]=useState(true)

    // const [productDetails,setproductDetails]=useState()

    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`).then(response=>{dispatch(GetProductDetails(response.data))})
    },[])
   
    const AddtoCart=()=>{

        isLoggedin && user=="user"?history.push('/addtocart'):history.push('/login')
       
        
    }

//    const DeleteDetails=()=>{
//     history.push(`/delete-product/${id}`)

// }

// const EditDetails=(id)=>{
//     history.push(`/edit-product/${id}`)
// }
    

    return(
        <>
        
        <div class="container-1">

            {
                product &&

                <div class="box-1">
                     <img src={product.image} style={{width: '10%'}}/>
                <p>{product.title}</p>
                <p>Description:{product.description}</p>
                <p>Price:{product.price}</p>
                <p>Category:{product.category.name}</p>
                {user=="admin"?<>
                <Button variant="contained" color="primary" >Edit</Button>
                <Button variant="contained" color="primary">Delete</Button>
                
                </>:
                <Button variant="contained" color="primary" onClick={AddtoCart}>Add to Cart</Button>
                }

                
            


                </div>

               
            }

           

            {/* <BounceLoader loading={loading}/>

            

            <p>
                {productDetails && 
            <>
            <p>{productDetails.title}</p>
            <img src={productDetails.image} style={{width: '10%'}}/>
            <button onClick={()=>{DeleteDetails(productDetails.id)}}>Delete</button>
            <button onClick={()=>{EditDetails(productDetails.id)}}>Edit</button>
            
            
            </>}
            
            </p>
       */}

        </div>
       

        </>
    )
       
    


}

export default ProductDetails