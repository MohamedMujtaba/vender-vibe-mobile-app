import { createSlice } from "@reduxjs/toolkit";

interface colorModeInterface {
  isDark: boolean;
}

const initialState = {
  isDark: false,
} as colorModeInterface;

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggle } = colorModeSlice.actions;
export default colorModeSlice.reducer;
