import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE } from "./CartTyps"


export const addToCart=(product)=>{
    return{
        type:ADD_TO_CART,
        payload:product
    }
}

export const increment=(product)=>{
    return{
        type:INCREMENT,
        payload:product
    }
}

export const decrement=(product)=>{
    return{
        type:DECREMENT,
        payload:product
    }
}

export const remove=(product)=>{
    return{
        type:REMOVE,
        payload:product
    }
}