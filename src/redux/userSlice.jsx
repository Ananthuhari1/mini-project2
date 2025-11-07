import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("authUser"));

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: storedUser || null,
  },
  reducers: {
    register: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find((u) => u.email === action.payload.email);
      if (exists) throw new Error("Email already registered!");
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
    },
    login: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const found = users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (found) {
        state.currentUser = found;
        localStorage.setItem("authUser", JSON.stringify(found));
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
