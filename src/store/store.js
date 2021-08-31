import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { mainReducer } from "./reducers";

const composeEnhacer=composeWithDevTools(applyMiddleware(thunk))

const store=createStore(mainReducer,composeEnhacer)
export default store