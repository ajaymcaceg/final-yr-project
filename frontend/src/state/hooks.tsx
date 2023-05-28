import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
