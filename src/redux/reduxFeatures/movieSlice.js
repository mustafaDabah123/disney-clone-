import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    allMovies:null,
    recommend:null,
    trending:null,
    original:null,
    newDisney:null 
}
 
const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        setMovies: (state , action) => {
            state.allMovies = action.payload.allMovies;
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.trending = action.payload.trending;
            state.original= action.payload.original;
        }
    }
});

export const {setMovies} = movieSlice.actions;

export default movieSlice.reducer