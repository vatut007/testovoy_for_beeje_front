import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer/root-reducer";
import { Api } from "./api/api-slice";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
