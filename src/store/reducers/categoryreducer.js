import { ActionTypes } from "../ActionType";

const initialState={
    categories:[]
}
export const categoryReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Set_Category:
            return{...state,categories:action.payload}
            
          
    
        default:
            return state
            break;
    }

}
