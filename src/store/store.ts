import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import customersReducer from "./slice"

export const store = configureStore({
  reducer: {
    customers: customersReducer,
  },
})

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
