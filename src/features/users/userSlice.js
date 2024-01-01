import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

// Slice of the global ui state
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions; // action creators

export default userSlice.reducer;
