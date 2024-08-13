import {AnyAction, combineReducers, configureStore, Reducer} from "@reduxjs/toolkit";
import {rocketReducer} from "@/entities/Rocket";
import {AxiosInstance} from "axios";
import {userReducer} from "@/entities/User";
import {authReducer} from "@/features/authByEmail";
import {$api} from "@/shared/api/api";
import {likedReducer} from "@/pages/RocketDetailsPage";
import {RocketSchema} from "@/entities/Rocket/model/types/rocketSchema";

const rootReducer = combineReducers({
    user: userReducer,
    rocket: rocketReducer,
    loginForm: authReducer,
    liked: likedReducer
})

const extraArg: ThunkExtraArg = {
    api: $api,
};

export function createStore () {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: RootState
}
