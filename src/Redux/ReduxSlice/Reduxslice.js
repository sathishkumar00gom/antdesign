import { createSlice } from "@reduxjs/toolkit";


const initialState={
    redux:{}
}

const Reduxslice=createSlice({
    name:"Movies",
    initialState,
    reducers:{
        addmovies:(state,{payload})=>{
            state.Movies=payload;
        }
    }
})

export const {addmovies}=Reduxslice.actions;
export const getAllMovies=(state)=>state.Movies.redux;
export default Reduxslice.reducer;