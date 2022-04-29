import { applyMiddleware, createStore } from "redux";
import reducers from "../Reducer/reducer"
import ThunkMiddleware from "redux-thunk"


const middleware = [ThunkMiddleware]
const store = createStore(reducers, (applyMiddleware(...middleware)));

export default store;