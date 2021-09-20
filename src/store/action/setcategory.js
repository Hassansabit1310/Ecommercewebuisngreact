import axios from "axios"
import { ActionTypes } from "../ActionType"

const SetCategory=(category)=>{
    return{
        type:ActionTypes.Set_Category,
        payload:category
    }

}

const RequestAddCategory=(name,description,token)=>{

    const data={
        "name":name,
        "description":description,
        
    }
    
    

return async(dispatch)=>{
    axios.post("http://localhost:8080/category",
    data,
   {
        headers:{

            authorization: `bearer ${token}`
        }
     
        
    }
 
    
    ).then(response=>{dispatch(SetCategory(response.data))})
}
}
export default RequestAddCategory