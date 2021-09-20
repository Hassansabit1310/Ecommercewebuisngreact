
import { ActionTypes } from "../ActionType";

const initialState={
    categoryList:[]
}

const GetCategoryReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Get_Categories:
            return{...state,categoryList:action.payload}
            
            break;
    
        default:
            return state
            break;
    }

}

export default GetCategoryReducer