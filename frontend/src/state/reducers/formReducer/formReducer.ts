import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { message } from "antd";

type formState = {
  form: FormData[];
};

const initialState: formState = {
  form: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state: formState, action: PayloadAction<FormData[]>) => {
      state.form = action.payload;
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
