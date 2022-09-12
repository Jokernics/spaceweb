import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false
};


export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    toggleView: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    }
  },
});

export const { toggleView } = viewSlice.actions;

export const selectSidebarView = (state) => state.view.isSidebarOpen

export default viewSlice.reducer;
