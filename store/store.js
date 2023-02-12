import { configureStore } from '@reduxjs/toolkit';
import findUser from './slices/authSlice'

const store = configureStore({
    reducer: {
        findName: findUser ,
    },
});


export default store;