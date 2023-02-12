import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

const initialState = {
  nameValue: 'Jeevan'
};

export const setName = createAsyncThunk(
    'setName',
     (name: string) => {
        return name;
    }
);

const findUser = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(setName.fulfilled, (state) => {
            state.nameValue = initialState.nameValue
        });
  },
});

export default findUser.reducer;

