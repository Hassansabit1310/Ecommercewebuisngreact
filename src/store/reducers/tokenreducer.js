import { ActionTypes } from "../ActionType";

const initialState={
    token: null
}

export const getTokenReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Set_Token:
            return{...state,token:action.payload}
            
            
        default:
            return state 
            break;
    }
}
