import { createSlice } from "@reduxjs/toolkit";

import { message } from "antd";

// type formState = {
//   form: FormData[];
// };

const initialState = {
  form: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
