/**
 * Created by matan on 18/11/2016.
 */

import {ADD_TODO, REMOVE_TODO} from './actiontypes.js'

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

function removeTodo(todoId) {
    return {
        type: REMOVE_TODO,
        todoId
    }
}


export {ADD_TODO, REMOVE_TODO, addTodo, removeTodo};
