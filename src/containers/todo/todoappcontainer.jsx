import React from 'react'
import InsertBox from '../../components/insertbox/insertbox.jsx'
import TodoItem from '../../components/todoitem/todoitem.jsx'

require('./todoappcontainer.css');

export default class TodoAppContainer extends React.Component {
    render() {
        return (
            <div className="todo">
                <div className="todo-container">
                    <InsertBox onEnter={this.props.onEnter}/>
                    <ol>
                        {this.props.todoItems.map(
                            (todo) => TodoItem.createTodoItem(todo.id,
                                todo.value, this.props.onItemDel)
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}