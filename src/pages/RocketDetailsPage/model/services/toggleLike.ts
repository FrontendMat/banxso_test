import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {Liked} from "../types/liked";

export const toggleLike = createAsyncThunk<
    Liked,
    string | undefined,
    ThunkConfig<string>
>
(
    'toggleLike',

    async (dataId, thunkAPI) => {
        const {extra,dispatch, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.post<Liked>('like/toggle', {dataId});
            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue(String(e));
        }
    },
);