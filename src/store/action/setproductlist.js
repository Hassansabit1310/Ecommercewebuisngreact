import axios from "axios"
import { ActionTypes } from "../ActionType"
import { LogOut } from "./logoutaction"

const SetProductList=(productList)=>{
 return {
     type: ActionTypes.Update_Product_List,
     payload:productList
 }

}
export const RequestProductList=()=>{
    return async(dispatch)=>{

        const response=await axios.get("http://localhost:8080/products")
        dispatch(SetProductList(response.data))
        

    }
}

export default SetProductList