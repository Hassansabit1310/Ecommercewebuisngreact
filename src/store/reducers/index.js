import { combineReducers } from "redux";
import GetProductDetails from "../action/getproductdetailsaction";
import AddUserReducer from "./adduserreducer";

import GetCategoryReducer from "./getcategoryredicer";
import GetDetailReducer from "./getdetailreducer";
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
    getProductReducer:GetProductReducer,
    getDetailReducer:GetDetailReducer,
    addUserReducer:AddUserReducer
    
})