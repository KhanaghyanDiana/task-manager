import { taskManagmentReducer } from "./store";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

export const rootReducer = combineReducers({
    taskManagmentReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(logger)
)