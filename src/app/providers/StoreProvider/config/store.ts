import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {rocketReducer} from "@/entities/Rocket/model/slice/rocketSlice";

const rootReducer = combineReducers({
    rocket: rocketReducer
})

export function createStore () {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
