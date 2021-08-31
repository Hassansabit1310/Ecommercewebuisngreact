import { ActionTypes } from "../ActionType";

const initialState={
    productList:[]
}

export const productListReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Update_Product_List:
            return {...state,productList:action.payload}
            
          
    
        default:
            return state
            break;
    }

}