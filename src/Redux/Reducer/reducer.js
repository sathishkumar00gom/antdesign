import { combineReducers } from "redux"
import { ProductReducer, PremiumReducer } from "./ProductReducer"


const reducers = combineReducers({
    allproducts: ProductReducer,
    allpremium: PremiumReducer,
})


export default reducers;