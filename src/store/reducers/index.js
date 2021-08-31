import { combineReducers } from "redux";
import { productListReducer } from "./productlistreducer";

export const mainReducer=combineReducers({
    listReducer:productListReducer
})