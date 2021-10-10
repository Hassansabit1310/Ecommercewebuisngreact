import axios from "axios"
import { ActionTypes } from "../ActionType"

const GetMyCart=(mycart)=>{
    return{
        type:ActionTypes.Get_MyCart,
        payload:mycart
    }
}

const RequestGetMyCart=(token)=>{
    return async(dispatch)=>{
        axios.get("http://localhost:8080/cart",
        {
            headers:{
    
                authorization: `bearer ${token}`
            }
         
        }
        ).then(response=>{dispatch(GetMyCart(response.data))})

    }
}
export default RequestGetMyCart