import React from 'react';

require('./todoitem.css');

export default class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <li>{this.props.text}</li>
                <a onClick={()=>this.props.deleteTodo(this.props.todoId)}
                                                className="delete-btn" href="#"/>
            </div>
        )
    }

    static createTodoItem(todoId, text, deleteTodoFunc){
        return <TodoItem todoId={todoId} key={todoId} text={text}
                                                deleteTodo={deleteTodoFunc} />;
    }
}
