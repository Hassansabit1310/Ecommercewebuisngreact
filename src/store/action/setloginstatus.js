import { ActionTypes } from "../ActionType"

const SetLoginStatus=()=>{
    return{
        type:ActionTypes.Logged_In,
        payload:true
    }
}
export default SetLoginStatus