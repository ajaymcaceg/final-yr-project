import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    value: "Test",
  },
  reducers: {
    apiRequestSuccess: (state, action) => {
      // message.success(action.payload);
    },
    apiRequestFailed: (state, action) => {
      message.error(action.payload);
    },
  },
});

export const { apiRequestSuccess, apiRequestFailed } = apiSlice.actions;
export default apiSlice.reducer;
