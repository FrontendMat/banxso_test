import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({})

export function createStore () {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
