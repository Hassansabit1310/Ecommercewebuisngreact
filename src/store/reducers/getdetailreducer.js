import { GetMyDetail } from "../action/getmydetailaction";
import { ActionTypes } from "../ActionType";

const initialState={
    detail:[]
}

const GetDetailReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.Get_Detail:
            return {...state,detail:action.payload}
            
            break;
    
        default:
            return state;
            break;
    }
}
export default GetDetailReducer