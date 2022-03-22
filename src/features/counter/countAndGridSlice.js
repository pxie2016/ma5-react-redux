import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  box1Color: 0,
  box2Color: 0,
  box3Color: 0,
  box4Color: 0,
};

export const countAndGridSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    calcSum: state => {
      state.count = state.box1Color + state.box2Color + state.box3Color + state.box4Color;
    },
    box1Switch: state => {
      state.box1Color = 1 - state.box1Color;
    },
    box2Switch: state => {
      state.box2Color = 1 - state.box2Color;
    },
    box3Switch: state => {
      state.box3Color = 1 - state.box3Color;
    },
    box4Switch: state => {
      state.box4Color = 1 - state.box4Color;
    },
  },
});

export const { calcSum, box1Switch, box2Switch, box3Switch, box4Switch } = countAndGridSlice.actions;

// The functions below are called selectors and allow us to select a value from
// the state.

export const selectCount = (state) => state.counter.count;
export const selectBox1Color = (state) => state.counter.box1Color;
export const selectBox2Color = (state) => state.counter.box2Color;
export const selectBox3Color = (state) => state.counter.box3Color;
export const selectBox4Color = (state) => state.counter.box4Color;

export default countAndGridSlice.reducer;