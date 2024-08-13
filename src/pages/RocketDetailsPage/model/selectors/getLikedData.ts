import {RootState} from "@/app/providers/StoreProvider";

export const getLikedData = (state: RootState) => state.liked.data;
export const getLikedIsLoading = (state: RootState) => state.liked.data;
export const getLikedError = (state: RootState) => state.liked.error;