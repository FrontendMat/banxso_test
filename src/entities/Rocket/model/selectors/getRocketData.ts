import {RootState} from "@/app/providers/StoreProvider";

const initialData = JSON.parse(localStorage.getItem('rocketData') || '[]');

export const getRocketData = (state: RootState) => state.rocket?.data || initialData;
export const getRocketIsLoading = (state: RootState) => state.rocket.isLoading;
export const getRocketError = (state: RootState) => state.rocket.error;