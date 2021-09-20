import axios from "axios"

import { ActionTypes } from "../ActionType"

export const AddProduct=(product)=>{
    return{
        type:ActionTypes.Add_Product,
        playload:product
    }
}

const RequestAddprouct=(title, product_price, description,photo,stock,_id,token)=>{
    const data={
        title:title,
        price: product_price,
        description:description,
        image:photo,
        stock: stock,
        category: {
            _id:_id,
        }

    }
    return async(dispatch)=>{
        axios.post("http://localhost:8080/products",
        data,
        {
            headers:{
    
                authorization: `bearer ${token}`
            }
         
            
        }
        

        ).then(response=>{dispatch(AddProduct(response.data))})
    }
}
export default RequestAddprouct