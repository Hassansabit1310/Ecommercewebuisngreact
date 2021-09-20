import axios from "axios"
import { ActionTypes } from "../ActionType"

const GetLoginData =(loginData)=>{
 return {
     type: ActionTypes.Set_Login_Data,
     payload:loginData
 }

}

export default GetLoginData




