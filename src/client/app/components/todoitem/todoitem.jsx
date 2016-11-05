import React from 'react';

require('./todoitem.css');

export default class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <li>{this.props.value}</li>
                <a onClick={()=>this.props.deleteItem(this.props.index)} className="delete-btn" href="#"/>
            </div>
        )
    }

    static createTodoItem(index, content, deleteItemFunc){
        return <TodoItem index={index} key={index} value={content} deleteItem={deleteItemFunc} />;
    }
}
