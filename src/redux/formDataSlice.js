import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentMethod: 'GET',
}

export const methodSlice = createSlice({
  name: 'methodGetter',
  initialState,
  reducers: {
    changeMethod: (state, action) => {
      state.currentMethod = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeMethod } = methodSlice.actions

export default methodSlice.reducer