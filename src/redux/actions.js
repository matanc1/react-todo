/**
 * Created by matan on 18/11/2016.
 */

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";


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
