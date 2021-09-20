import { combineReducers } from "redux";
import GetProductDetails from "../action/getproductdetailsaction";

import GetCategoryReducer from "./getcategoryredicer";
import { GetProductReducer } from "./getproductdetailsreducer";
import { loginDataReducer } from "./logindatreducer";
import LoginStatusReducer from "./loginstatusreducer";
import { productListReducer } from "./productlistreducer";
import {getTokenReducer} from './tokenreducer'

export const mainReducer=combineReducers({
    listReducer:productListReducer,
    loginReducer: loginDataReducer,
    tokenReducer: getTokenReducer,
    categoryReducer:GetCategoryReducer,
    loginStatusReducer:LoginStatusReducer,
    getProductReducer:GetProductReducer
    
})