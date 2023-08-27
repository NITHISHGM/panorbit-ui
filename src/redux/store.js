import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./slice/usersSlice";
import selectedUserSlice from "./slice/selectedUserSlice";

export const store = configureStore({
  reducer: {
    allUsers: usersSlice,
    selectedUser: selectedUserSlice,
  },
});
