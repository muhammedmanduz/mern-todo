import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.newModal = true;
    },
    closeAddModal: (state) => {
      state.newModal = false;
    },
  },
});

export const { openAddModal, closeAddModal } = modalSlice.actions;

export default modalSlice.reducer;
