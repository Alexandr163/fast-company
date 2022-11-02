import { combineReducers, configureStore } from "@reduxjs/toolkit";
import professionsReducer from "./porofessions";
import qualitiesReducer from "./qualities";

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
