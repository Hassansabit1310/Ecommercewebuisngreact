import { ActionTypes } from "../ActionType"
const initialState={
    cart:[]
}

export const AddtoCartReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Add_Cart:
            return {...state,cart:action.payload}
            
            break;
    
        default:
            return state
            break;
    }

}

const RequestAddtoCart=(id,quantity)=>{

}