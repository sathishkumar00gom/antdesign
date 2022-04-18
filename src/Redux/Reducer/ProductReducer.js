import { ActionTypes } from "../Action/Actiontype"

const initialState={
    products:[],
}


export const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:action.payload};
        case ActionTypes.SELECTED_PRODUCTS:
            console.log("pro=>",action.payload)
            return{...state,products:action.payload}
    default:
                return state;
}

}