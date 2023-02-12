import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nameList: [],
    singleName: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addName: (state, action) => {
          state.nameList.push(action.payload);
        },
        updateName: (state, action) => {
            state.singleName = action.payload;
        },
  },
});

export const { addName, updateName } = userSlice.actions;

export default userSlice.reducer;

