import { configureStore } from '@reduxjs/toolkit';
import viewSlice from '../features/view/viewSlice';
import vpsSlice from '../features/vps/vpsSlice';

export const store = configureStore({
  reducer: {
    view: viewSlice,
    vps: vpsSlice
  },
});
