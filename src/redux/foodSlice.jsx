import { createSlice } from "@reduxjs/toolkit";

const storedFoods = JSON.parse(localStorage.getItem("foods")) || [];

const foodSlice = createSlice({
  name: "foods",
  initialState: { items: storedFoods },
  reducers: {
    addFood: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("foods", JSON.stringify(state.items));
    },
  },
});

export const { addFood } = foodSlice.actions;
export default foodSlice.reducer;
