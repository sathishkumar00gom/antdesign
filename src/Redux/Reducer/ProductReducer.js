import { ActionTypes } from "../Action/Actiontype"
import { ActionPremiumTypes } from "../PremiumAction/PremiumActiontype";


const initialState = {
    products: [],
    Premium: [],
}


export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ActionTypes.SELECTED_PRODUCTS:
            console.log("pro=>", action.payload)
            return { ...state, products: action.payload }
        default:
            return state;
    }

}

export const PremiumReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ActionPremiumTypes.SET_PREMIUM):
            return { ...state, Premium: action.payload };
        case (ActionPremiumTypes.SELECTED_PREMIUM):
            return { ...state, Premium: action.payload }
        default:
            return state;
    }
}


