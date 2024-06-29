import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {filterel:''},
  reducers: {
    filterContact(state, action) {
      state.filterel = action.payload;
    },
  },
});

export const { filterContact } = slice.actions;
export const filterReducer = slice.reducer;
