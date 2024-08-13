import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {Liked} from "../types/liked";

export const fetchLikedData = createAsyncThunk<
    Liked[],
    void,
    ThunkConfig<string>
>
(
    'fetchLikedData',

    async (_, thunkAPI) => {
        const {extra,dispatch, rejectWithValue, getState} = thunkAPI;

        try {
            const response = await extra.api.get<Liked[]>('like/get', );
            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e:any) {
            console.log(e)
            return rejectWithValue(String(e.response.data.message));
        }
    },
);