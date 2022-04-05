import {configureStore} from "@reduxjs/toolkit"
import Moviereducer from "./Reduxslice./Reduxslice"

export const store=configureStore({
    reducer:Moviereducer
})