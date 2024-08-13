import { ADD_TASK, TOGGLE_TASK, SET_FILTER, DELETE_TASK, EDIT_TASK, TOGGLE_ALL, DEFAULT } from './actionTypes';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    };
}

export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id,
    };
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter,
    };
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    };
}

export const editTask = (id, task) => {
    return {
        type: EDIT_TASK,
        payload: { id, task },
    };
}

export const toggleAll = () => {
    return {
        type: TOGGLE_ALL,
    };
}

export const defaultAction = () => {
    return {
        type: DEFAULT,
    };
}
