import React from 'react';
import TodoItem from '../todoitem/todoitem.jsx'

require('./todolist.css');

export default class TodoList extends React.Component {
    render() {
        return (
            <ol>
                {this.props.todos.map(
                    (todo) => TodoItem.createTodoItem(todo.todoId,
                        todo.text, this.props.deleteTodo)
                )}
            </ol>
        )
    }
}
