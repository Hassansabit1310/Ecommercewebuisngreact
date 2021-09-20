import { ActionTypes } from "../ActionType";

const initialState={
    adminloginData:[]
}

export const productListReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Admin_Login:
            return {...state,adminloginData:action.payload}
            
          
    
        default:
            return state
            break;
    }

}