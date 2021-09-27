import axios from "axios"
import { ActionTypes } from "../ActionType"

const GetMyDetail=(detail)=>{
    return{
        type:ActionTypes.Get_Detail,
        payload:detail
    }
}

const RequestMyDetail=(token)=>{
    return async(dispatch)=>{
        axios.get("http://localhost:8080/my-detail",
        {
            headers:{
    
                authorization: `bearer ${token}`
            }
         
            
        }).then(response=>{dispatch(GetMyDetail(response.data))})
    }
}

export default RequestMyDetail