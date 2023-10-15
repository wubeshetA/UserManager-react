import { configureStore } from '@reduxjs/toolkit'
import methodReducer from './formDataSlice';
import responseReducer from './responseSlice';
export const store = configureStore({
  reducer: {
    methodGetter: methodReducer,
    responseGetter: responseReducer,
  },
})