import axios from "axios"
import { ActionTypes } from "../ActionType"

const GetUsers=(users)=>{
    return{
        type:ActionTypes.Get_Users,
        payload:users
    }
}

export const RequestUserList=(token)=>{
    return async(dispatch)=>{

        const response=await axios.get("http://localhost:8080/user",
        {
            headers:{
    
                authorization: `bearer ${token}`
            }
         
            
        }
        )
        dispatch(GetUsers(response.data))
        

    }
}

export default RequestUserList