import React from 'react'
import TodoApp from './todoapp.js'
import {connect} from 'react-redux'

import { addTodo, removeTodo } from './todoapp.actions.js'

const mapStateToProps = (state) => { return { todos: state.todos } };

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (todoId) => { dispatch(removeTodo(todoId)) },
        addTodo: (event) => {
            if (event.key == 'Enter' && event.target.value.trim() != '') {
                dispatch(addTodo(event.target.value));
                event.target.value = '';
            }
        }
    }
};

const TodoAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);

export default TodoAppContainer;

