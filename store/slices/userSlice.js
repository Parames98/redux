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
        deleteTodo: (state, action) => {
            const index = state.nameList.findIndex(todo => todo.id === action.payload);
            state.nameList.splice(index, 1);
        }
  },
});

export const { addName, updateName, deleteTodo } = userSlice.actions;

export default userSlice.reducer;

