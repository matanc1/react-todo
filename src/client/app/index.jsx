import React from 'react';
import ReactDOM from 'react-dom';
import TodoAppContainer from './containers/todo/todoappcontainer.jsx';
import TodoDB from './utils/tododb.js';
import 'babel-polyfill'
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

    setTodoItems(todoItems){
        this.setState({todoItems: todoItems});
    }

    async addItem(event) {
        if (event.key == 'Enter') {
            const value = event.target.value;
            const target = event.target;
            const createdId = await TodoDB.addItem(event.target.value);
            this.setTodoItems(this.state.todoItems.concat({id: createdId, value: value}));
            target.value = '';
        }
    }

    async deleteItem(id) {
        let response = await TodoDB.deleteItem(id);
        if (response.status == 200) {
            this.setTodoItems(this.state.todoItems.filter((item) => item.id != id));
        }
        else {
            console.log('Error deleting item: ${id}');
        }
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

