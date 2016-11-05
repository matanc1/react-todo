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

        this.onEnter = this.onEnter.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    onEnter(event){
        if(event.key == 'Enter'){
            let currItems = this.state.todoItems.slice();
            let newItem = TodoItems.createTodoItem(currItems.length, event.target.value, this.deleteItem);
            currItems.push(newItem);
            this.setState({todoItems: currItems});
            event.target.value = '';
        }
    }

    deleteItem(id){
        let currItems = this.state.todoItems.slice();
        let index = currItems.findIndex((x)=>x.key==id);
        console.log("Before deleting");
        for(var i of this.state.todoItems){
            console.log(i);
        }
        console.log("Delete Element at place: " + index.toString());
        currItems.splice(index,1);
        this.setState({todoItems: currItems});
    }

    render() {
        console.log("Rendering");
        for(var i of this.state.todoItems){
            console.log(i);
        }
        return (
            <TodoAppContainer todoItems={this.state.todoItems} onEnter={this.onEnter}/>
        );
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);

