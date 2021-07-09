import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import movieReducer from './reduxFeatures/movieSlice';
import searchSlice from './reduxFeatures/searchSlice';
import userReducer from './reduxFeatures/userSlice';
import watchList from './reduxFeatures/watchListSlice ';


const reducers = combineReducers({
        user:userReducer,
        movies:movieReducer,
        search:searchSlice,
        watchList:watchList
})

const persistConfig = {
    key:'root',
    storage,
    whileList:['watchList']
}

const persistedReducer = persistReducer(persistConfig , reducers)

 const store =  configureStore({
    reducer:persistedReducer ,
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }) 
})


export default  store 