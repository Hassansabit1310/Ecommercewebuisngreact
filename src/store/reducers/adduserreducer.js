import { ActionTypes } from "../ActionType"
const initialState={
    user:null
}

const AddUserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.Add_User:
            return {...state,user:action.payload}
            
            break;
    
        default:
            return state
            break;
    }
}
export default AddUserReducer