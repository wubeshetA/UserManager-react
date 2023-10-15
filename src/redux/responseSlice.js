import { createSlice } from "@reduxjs/toolkit";

export const responseSlice = createSlice({
  name: "responseGetter",
  initialState: {
    response: null,
  },
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResponse } = responseSlice.actions;

export default responseSlice.reducer;
