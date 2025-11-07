import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: storedCart },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        const newQty = existing.qty + 1;
        if (newQty > action.payload.stock) {
          toast.error("Quantity exceeds stock!");
          return;
        }
        existing.qty = newQty;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
