import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVpsData } from '../../API/getVpsData';

const initialState = {
  isVdsModelOpen: false,
  selectedTariff: null,
  isVpsDataLoading: false,
  vpsDataError: null,
  vpsData: null
};

export const fetchVpsData = createAsyncThunk(
  'vps/fetch',
  getVpsData
)

export const vpsSlice = createSlice({
  name: 'vps',
  initialState,
  reducers: {
    setDelectedTariff: (state, action) => {
      if (action.payload == null) return
      state.selectedTariff = action.payload
      console.log(action.payload)
      state.isVdsModelOpen = true
    },
    toggleIsVdsModelOpen: (state) => {
      state.isVdsModelOpen = !state.isVdsModelOpen
    }
  },
  extraReducers: {
    [fetchVpsData.pending]: (state) => {
      state.isVpsDataLoading = true
      state.vpsDataError = null
    },
    [fetchVpsData.fulfilled]: (state, action) => {
      state.isVpsDataLoading = false
      state.vpsData = action.payload
    }
  }
});

export const { setDelectedTariff, toggleIsVdsModelOpen } = vpsSlice.actions;


export const selectSelectedTariff = (state) => state.vps.selectedTariff
export const selectIsVdsModelOpen = (state) => state.vps.selectedTariff

export default vpsSlice.reducer;
