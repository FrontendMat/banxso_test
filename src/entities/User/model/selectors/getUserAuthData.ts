import {RootState} from "@/app/providers/StoreProvider";

export const getUserAuthData = (state: RootState) => state.user.authData;
export const getUserInited = (state: RootState) => state.user._inited;