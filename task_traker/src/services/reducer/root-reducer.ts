import { combineSlices } from "@reduxjs/toolkit";
import { Api } from "../api/api-slice";

export const rootReducer = combineSlices(
    Api
);
export type RootState = ReturnType<typeof rootReducer>;