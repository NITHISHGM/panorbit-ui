import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsers = createAsyncThunk("panorbit/getAllUsers", async (id) => {
  try {
    const response = await axios.get(`https://panorbit.in/api/users.json`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const getUsersSlice = createSlice({
  name: "getUsersSlice",
  initialState: {
    data: [],
    status: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message;
      });
  },
});
export default getUsersSlice.reducer;
