import { ActionTypes } from "../ActionType"

const GetProductDetails=(product)=>{
    return{
        type:ActionTypes.Get_Product,
        payload:product
    }
}
export default GetProductDetails