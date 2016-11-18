/**
 * Created by matan on 18/11/2016.
 */

import  {ADD_TODO, REMOVE_TODO} from './actions.js'
import { combineReducers } from 'redux'

let initialState = {
    todos: []
};

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                    todoId: state.length,
                    text: action.text
                }];
        case REMOVE_TODO:
                return state.filter((todo)=> {
                    return todo.todoId !== action.todoId;
                });
        default:
            return state;
    }
}


function app(state = initialState, action){
    return {
        todos: todos(state.todos)
    }
}

const todoApp = combineReducers({app});

export {todoApp};
