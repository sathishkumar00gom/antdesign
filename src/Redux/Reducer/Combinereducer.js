import {combineReducers} from "redux"
import { ProductReducer } from "./ProductReducer"
import { PremiumReducer } from "./ProductReducer"

const reducers=combineReducers({
    allproducts:ProductReducer,
    allpremium:PremiumReducer,
})


export default reducers;