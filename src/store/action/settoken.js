import { ActionTypes } from "../ActionType"

const SetToken=(token)=>{
    return { type:ActionTypes.Set_Token,
        payload:token

    }
}
export default SetToken