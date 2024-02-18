import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  counter: [],
  item: [],
};

const Slice = createSlice({
  name: "addToCartSlice",
  initialState,
  reducers: {
    addCount: (state: any, action: any) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.counter.push(data);
    },
  },
});

export const { addCount } = Slice.actions;
export default Slice.reducer;
