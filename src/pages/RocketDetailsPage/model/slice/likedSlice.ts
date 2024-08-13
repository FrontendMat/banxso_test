import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Liked, LikedSchema} from "../types/liked";
import {toggleLike} from "../services/toggleLike";
import {fetchLikedData} from "../services/fetchLikedData";

const initialState: LikedSchema = {
    data: undefined
};

export const likedSlice = createSlice({
    name: 'likedSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLikedData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchLikedData.fulfilled, (state, action: PayloadAction<Liked[]>) => {
                state.isLoading = false;
                state.data = action.payload
            })
            .addCase(fetchLikedData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(toggleLike.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(toggleLike.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(toggleLike.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: likedActions } = likedSlice;
export const { reducer: likedReducer } = likedSlice;
