/**
 * Created by matan on 18/11/2016.
 */

import  {ADD_TODO, REMOVE_TODO} from '../todo/todoapp.actions.js'
import { combineReducers } from 'redux'

function todosAction(state = [], action) {
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

const todoApp = combineReducers({
    todos: todosAction
});

export {todoApp};
