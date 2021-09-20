import axios from "axios"
import { ActionTypes } from "../ActionType"

const GetAdminLoginData =(loginData)=>{
 return {
     type: ActionTypes.Admin_Login,
     payload:loginData
 }

}