import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search:null
}

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearch:(state , action) => {
            state.search = action.payload.search
        }
    }
})

export const {setSearch} = searchSlice.actions ;

export default searchSlice.reducer ;