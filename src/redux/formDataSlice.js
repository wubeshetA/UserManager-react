import { createSlice } from "@reduxjs/toolkit";

export const methodSlice = createSlice({
  name: "methodGetter",
  initialState: {
    currentMethod: "GET",
  },
  reducers: {
    setMethod: (state, action) => {
      state.currentMethod = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMethod } = methodSlice.actions;

export default methodSlice.reducer;
