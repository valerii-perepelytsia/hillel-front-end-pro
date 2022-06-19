import {ADD_TODO, CHECK_TODO, REMOVE_TODO} from './types';

const initialState = {
    todos: [],
}

export const todos_app = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.newTodo, ...state.todos],
            }
        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (action.todoId === todo.id) {
                        return {
                            ...todo,
                            checked: !todo.checked,
                        }
                    }
                    return todo;
                }),
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => action.todoId !== todo.id)
            }
        default:
            return state;
    }
}