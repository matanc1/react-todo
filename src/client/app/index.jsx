import React from 'react';
import ReactDOM from 'react-dom';
import TodoAppContainer from './containers/todo/todoappcontainer.jsx';
import TodoDB from './utils/tododb.js';
require('./utils/app.css');

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {todoItems: []};
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        TodoDB.getInitialTodoItems()
                .then(todoItems => {
                    this.setState({todoItems: todoItems});
                });
    }

    addItem(event) {
        if (event.key == 'Enter') {
            const value = event.target.value;
            const target = event.target;
            TodoDB.addItem(event.target.value)
                .then((createdId) => {
                    const currState = this.state.todoItems;
                    const newState = currState.concat({id: createdId, value: value});
                    this.setState({todoItems: newState});
                    target.value = '';
                });
        }
    }

    deleteItem(id) {
        TodoDB.deleteItem(id)
            .then((response) => {
                if (response.status == 200) {
                    const todoItemsAfterDelete = this.state.todoItems.filter((item) => item.id != id);
                    this.setState({todoItems: todoItemsAfterDelete});
                }
                else {
                    console.log('Error deleting item: ${id}');
                }
            });
    }

    render() {
        return (
            <TodoAppContainer todoItems={this.state.todoItems} onEnter={this.addItem} onItemDel={this.deleteItem}/>
        );
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);

