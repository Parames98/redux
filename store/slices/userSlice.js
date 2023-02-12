import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    getName: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addName: (state, action) => {
          state.getName.push(action.payload);
      },
  },
});

export const { addName } = userSlice.actions;

export default userSlice.reducer;

