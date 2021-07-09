import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieList:[] ,
}

const watchListSlice = createSlice({
    name:'watchList',
    initialState,
    reducers:{
        addMovie:(state , action) => {
            state.movieList = [action.payload , ...state.movieList]
        },
        deleteMovie:(state , action) => {
            state.movieList = state.movieList.filter(movie => movie.id !== action.payload);
        }
    }
        
})

 export const {addMovie , deleteMovie} = watchListSlice.actions ;

export default watchListSlice.reducer;
    