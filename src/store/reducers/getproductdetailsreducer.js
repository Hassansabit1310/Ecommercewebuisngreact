import { ActionTypes } from "../ActionType";

const initialState={
    product:null
}

export const GetProductReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Get_Product:
            {
                return {...state,product:action.payload}
            }
            
            break;
    
        default:
            return state
            break;
    }

}