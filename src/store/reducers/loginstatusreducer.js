import { ActionTypes } from "../ActionType";
const initialState={
    isLoggedin:false
}

const LoginStatusReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.Logged_In:
            return{...state,isLoggedin:action.payload}

            
            break;
        case ActionTypes.Logged_Out:
            return{...state,isLoggedin:action.payload}
            break;    
    
        default:
            return state
            break;
    }
}

export default LoginStatusReducer