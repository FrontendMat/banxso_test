import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RocketSchema} from "../types/rocketSchema";
import {fetchRocketData} from "../services/fetchRocketData";
import {Rocket} from "../types/rocket";

const initialState: RocketSchema = {
    data: undefined,
    isLoading: false,
    inited: false,
    error: '',
}
export const rocketSlice = createSlice({
    name: 'rocketSlice',
    initialState,
    reducers: {
        setCachedData: (state, action: PayloadAction<Rocket[]>) => {
            state.data = action.payload;
        },
        setInited: (state) => {
            state.inited = true;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchRocketData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRocketData.fulfilled, (state, action: PayloadAction<Rocket[]>) => {
                state.isLoading = false;
                state.data = action.payload;
                console.log('fff');
                localStorage.setItem('rocketData', JSON.stringify(action.payload));
                state.inited = true;
            })
            .addCase(fetchRocketData.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Error';
                state.inited = true;
            })
    },
})

export const { actions: rocketActions } = rocketSlice;
export const { reducer: rocketReducer } = rocketSlice;