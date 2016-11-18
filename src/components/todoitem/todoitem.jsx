import React from 'react';

require('./todoitem.css');

export default class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <li>{this.props.value}</li>
                <a onClick={()=>this.props.deleteItem(this.props.id)}
                                                className="delete-btn" href="#"/>
            </div>
        )
    }

    static createTodoItem(id, content, deleteItemFunc){
        return <TodoItem id={id} key={id} value={content}
                                                deleteItem={deleteItemFunc} />;
    }
}
