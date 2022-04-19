import { ADD_TASK, DELATE_TASK, EDIT_TASK } from "./actionTypes";

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload
})

export const delateTask = (payload) => ({
    type: DELATE_TASK,
    payload
})

export const editTask = (payload) => ({
    type: EDIT_TASK,
    payload
})

