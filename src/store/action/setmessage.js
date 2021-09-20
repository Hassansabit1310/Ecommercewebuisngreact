import { ActionTypes } from "../ActionType"

const SetMessage=(message)=>{
    return{
        type:ActionTypes.Set_Message,payload:message
    }
}

export default SetMessage