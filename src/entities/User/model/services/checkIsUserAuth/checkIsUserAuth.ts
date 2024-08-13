import {createAsyncThunk} from "@reduxjs/toolkit";
import {userActions} from "../../slice/user";
import {USER_LOCALSTORAGE_KEY} from "@/shared/consts/localstorage";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import axios from "axios";
import {AuthResponse} from "../../types/user";

export const checkIsUserAuth = createAsyncThunk<
    AuthResponse,
    void,
    ThunkConfig<string>
>(
    'checkIsUserAuth',
    async (_, thunkAPI) => {
        const {dispatch, rejectWithValue} = thunkAPI;
        try {
            const response = await axios.get<AuthResponse>(`${__API__}/user/refresh`, {withCredentials: true})
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.accessToken);
            dispatch(userActions.setAuthData(response.data.user));
            return response.data;
        } catch (e: any) {
            return rejectWithValue(String(e.response.data.message));
        }
    },
);