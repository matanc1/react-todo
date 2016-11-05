import React from 'react';
import ReactDOM from 'react-dom';
import TodoAppContainer from './containers/todo/todoappcontainer.jsx';
import TodoDB from './utils/tododb.js';
import TodoItems from './components/todoitem/todoitem.jsx';

require('./utils/app.css');

class TodoApp extends React.Component {
    constructor(){
        super();
        this.state = {
            todoItems: TodoDB.getInitialTodoItems()
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(event){
        if(event.key == 'Enter'){
            let currItems = this.state.todoItems.slice();
            let newItem = TodoItems.createTodoItem(currItems.length, event.target.value, this.deleteItem);
            currItems.push(newItem);
            this.setState({todoItems: currItems});
            event.target.value = '';
        }
    }

    deleteItem(index){
        let currItems = this.state.todoItems.slice();
        let newItems = [];
        currItems.splice(index,1);

        let i=0;
        for(var todo of currItems){
            let newItem = TodoItems.createTodoItem(i, todo.props.value, this.deleteItem);
            newItems.push(newItem);
            i++;
        }

        this.setState({todoItems: newItems});
    }

    render() {
        return (
            <TodoAppContainer todoItems={this.state.todoItems} onEnter={this.addItem}/>
        );
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);

