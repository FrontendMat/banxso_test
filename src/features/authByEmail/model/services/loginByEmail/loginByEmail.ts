import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {USER_LOCALSTORAGE_KEY} from "@/shared/consts/localstorage";
import {userActions} from "@/entities/User";
import {AuthResponse} from "@/entities/User";

interface LoginByEmailProps {
    email: string,
    password: string
}

export const loginByEmail = createAsyncThunk<
    AuthResponse,
    LoginByEmailProps,
    ThunkConfig<string>
>
(
    'loginByEmail',
    
    async (userData, thunkAPI) => {
        const {extra,dispatch, rejectWithValue, getState} = thunkAPI;

        try {
            if (userData.email === '' || userData.password === '') {
                return rejectWithValue('Error: Enter data')
            }

            const response = await extra.api.post<AuthResponse>('user/login',
                userData
            );
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.accessToken);
            console.log(response.data.user)
            dispatch(userActions.setAuthData(response.data.user));
            return response.data
        } catch (e: any) {
            console.log(e)
            return rejectWithValue(String(e.response.data.message));
        }
    },
);