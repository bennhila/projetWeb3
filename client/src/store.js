import {configureStore} from '@reduxjs/toolkit';
import authReducer from './redux/slice/authSlice';
import authReducerAdmin from './redux/slice/adminAuthSlice'
import produitReducer from './redux/slice/produitAuthSlice'
export const store=configureStore({
    reducer:{
        auth:authReducer,
        authAdmin:authReducerAdmin,
        produitReducer:produitReducer
    }
})
export default store;
