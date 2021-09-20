import axios from "axios"
import { ActionTypes } from "../ActionType"

export const GetCategories=(categories)=>{

    return {
        type: ActionTypes.Get_Categories,
        payload:categories

    }
}

const RequestCategoryList=()=>{
    return async (dispatch)=>{
        axios.get("http://localhost:8080/category").then(response=>{dispatch(GetCategories(response.data))})

    }

}

export default RequestCategoryList