import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {getEmail, getPassword} from "../selectors/getAuthData";
import {userActions} from "@/entities/User/model/slice/user";
import {USER_LOCALSTORAGE_KEY} from "@/shared/consts/localstorage";
import {AuthResponse} from "@/entities/User";

export const registrateByEmail = createAsyncThunk<
    AuthResponse,
    void,
    ThunkConfig<string>
>
(
    'registrateByEmail',

    async (_, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI;
        const email = getEmail(getState());
        const password = getPassword(getState());

        try {
            if (email === '' || password === '') {
                return rejectWithValue('Error: Enter data')
            }
            const response = await extra.api.post<AuthResponse>('user/registration', {
                email, password
            });
            if (!response.data) {
                throw new Error();
            }

            // localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.accessToken);
            // dispatch(userActions.setAuthData(response.data.user));
            return response.data
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);