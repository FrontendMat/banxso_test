import {RootState} from "@/app/providers/StoreProvider";

export const getEmail = (state: RootState) => state.loginForm.email || '';
export const getPassword = (state: RootState) => state.loginForm.password || '';
export const getIsLoading = (state: RootState) => state.loginForm.isLoading;
export const getError = (state: RootState) => state.loginForm.error;