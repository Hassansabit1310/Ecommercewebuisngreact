import { ActionTypes } from "../ActionType"
const initialState={
    orders:[]
}

const GetOrderListReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ActionTypes.Get_Orders:
            return{...state,orders:action.payload}
            
            break;
    
        default:
            return state
            break;
    }

}

export default GetOrderListReducer