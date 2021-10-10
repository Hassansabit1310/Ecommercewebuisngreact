import axios from "axios"
import { ActionTypes } from "../ActionType"

const GetOrderList=(orders)=>{
    return{
        type:ActionTypes.Get_Orders,
        payload:orders
    }
}


const RequestOrderList=(token)=>{
    return async(dispatch)=>{
        axios.get("http://localhost:8080/order",
        {
            headers:{
    
                authorization: `bearer ${token}`
            }
         
        }
        ).then(response=>{dispatch(GetOrderList(response.data))})

    }
}
export default RequestOrderList