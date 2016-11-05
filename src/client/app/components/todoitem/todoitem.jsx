import React from 'react';

require('./todoitem.css');

export default class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <li>{this.props.value}</li>
                <a href="#"> hello </a>
            </div>
        )
    }
}
