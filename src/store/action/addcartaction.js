import { ActionTypes } from "../ActionType"

export const AddToCart=(productInCart)=>{
    return {
        type:ActionTypes.Add_Cart,
        payload:productInCart

    }
}