import { configureStore } from '@reduxjs/toolkit';
import getUpdateName from './slices/userSlice'

const store = configureStore({
    reducer: {
        findName: getUpdateName,
    },
});

export default store;