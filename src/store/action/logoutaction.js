import { ActionTypes } from "../ActionType"

export const LogOut=()=>{
    return{
        type:ActionTypes.Logged_Out,
        payload:false
    }
}