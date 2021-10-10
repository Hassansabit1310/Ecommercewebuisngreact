import { ActionTypes } from "../ActionType"
const initialState={
    mycart:[]
}

const GetMyCartReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Get_MyCart:
            return{...state,mycart:action.payload}
            
            break;
    
        default:
            return state
            break;
    }

}
export default GetMyCartReducer