import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import foodReducer from "./foodSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    foods: foodReducer,
    cart: cartReducer,
  },
});
