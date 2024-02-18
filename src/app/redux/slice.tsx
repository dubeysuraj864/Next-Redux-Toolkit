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
        state.counter = [...state.counter, data];
      },
      addItem: (state: any, action: any) => {
        const data = {
          id: nanoid(),
          name: action.payload,
        };
        state.item = [...state.item, data];
      }
      
  },
});

export const { addCount, addItem } = Slice.actions;
export default Slice.reducer;
