import { ActionTypes } from "../ActionType";

const initialState={
    users:[]
}

const GetUsersReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.Get_Users:
            return {...state,users:action.payload}
            
            break;
    
        default:
            return state
            break;
    }

}
export default GetUsersReducer