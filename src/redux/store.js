import { configureStore } from '@reduxjs/toolkit'
import methodReducer from './formDataSlice';
import responseReducer from './responseSlice';
import usersReducer from './usersSlice';
export const store = configureStore({
  reducer: {
    methodGetter: methodReducer,
    responseGetter: responseReducer,
    usersGetter: usersReducer,
  },
})