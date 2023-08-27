import { createSlice } from "@reduxjs/toolkit";
const selectedUserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {
    selectedUserAction: (state, action) => {
      const user = action.payload;
      state.data = [user];
    },
  },
});

export const { selectedUserAction } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
