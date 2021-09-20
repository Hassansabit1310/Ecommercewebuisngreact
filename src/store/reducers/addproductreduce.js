import { ActionTypes } from "../ActionType";

const initialState={
    product:[]
}

export const AddProductReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.Add_Product:
            return {...state,product:action.payload}
            
            break;
    
        default:
            return state
            break;
    }

}