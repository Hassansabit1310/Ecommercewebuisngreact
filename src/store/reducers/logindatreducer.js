import { ActionTypes } from "../ActionType";

const initialState={
    loginData:[]
}

export const loginDataReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Set_Login_Data:
            return {...state,loginData:action.payload}
            
          
    
        default:
            return state
            break;
    }

}