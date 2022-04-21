import { ADD_TASK, DELATE_TASK, EDIT_TASK, TASKS } from "./actionTypes"

const initialState = {
    tasks: [],
}

export const taskManagmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELATE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => {
                    return (
                        item.id !== action.payload
                    )
                })

            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(user => {
                    if (user.id !== action.payload.id) {
                        return user
                    }
                    return action.payload
                })
            }

        default:
            return {
                ...state

            }
    }
}