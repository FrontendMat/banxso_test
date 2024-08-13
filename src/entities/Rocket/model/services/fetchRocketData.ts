import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Rocket} from "../types/rocket";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchRocketData = createAsyncThunk<
    Rocket[],
    void,
    ThunkConfig<string>
>(
    'fetchRocketData',
    async (_, thunkAPI) => {
        const url = ' https://api.spacexdata.com/v4/dragons'

        try {
            const response = await axios.get<Rocket[]>(url);
            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('Error');
        }
    },
);