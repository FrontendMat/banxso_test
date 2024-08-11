import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Rocket} from "../types/rocket";

export const fetchRocketData = createAsyncThunk(
    'fetchRocketData',
    async (type, thunkAPI) => {
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