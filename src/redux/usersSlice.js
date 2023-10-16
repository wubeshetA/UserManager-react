import { createSlice } from "@reduxjs/toolkit";

// send a request to the server to get all users

// var data = [];
// const fetchInitialData = async () => {
//     const response = await axios.get('http://127.0.0.1:8000/api/users/');
//     data = response.data;
//   };


export const userSlice = createSlice({
  name: "usersGetter",
  initialState: {
    usersData: [],
  },
  reducers: {
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsersData } = userSlice.actions;

export default userSlice.reducer;
