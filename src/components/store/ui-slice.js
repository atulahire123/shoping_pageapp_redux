import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartIsVisible: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleCartVisible(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
