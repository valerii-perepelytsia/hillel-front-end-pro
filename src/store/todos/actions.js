import {ADD_TODO, REMOVE_TODO, CHECK_TODO} from './types';

export const add_todo = newTodo => {
    return ({
        type: ADD_TODO,
        newTodo,
    })
}

export const remove_todo = todoId => {
    return ({
        type: REMOVE_TODO,
        todoId,
    })
}

export const check_todo = todoId => {
    return ({
        type: CHECK_TODO,
        todoId,
    })
}