import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
});

export const { getCurrentDay, setSelectedMonts, changeMonth } =
  calendarSlice.actions;

export default calendarSlice.reducer;
