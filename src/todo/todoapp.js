/**
 * Created by matan on 19/11/2016.
 */
import React from 'react'
import InsertBox from './components/insertbox/insertbox.jsx'
import TodoList from './components/todolist/todolist.jsx'

require('./todoapp.css');

export default class TodoApp extends React.Component {
    render() {
        return (
            <div className="todo">
                <div className="todo-container">
                    <InsertBox addTodo={this.props.addTodo}/>
                    <TodoList todos={this.props.todos}
                              deleteTodo={this.props.deleteTodo} />

                </div>
            </div>
        );
    }
}
