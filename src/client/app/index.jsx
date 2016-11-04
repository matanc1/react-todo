import React from 'react';
import ReactDOM from 'react-dom';
import InsertBox from './components/insertbox.jsx'
import TodoItem from './components/todoitem.jsx'

class TodoApp extends React.Component {
    constructor(){
        super();
        this.state = {
            todoItems: TodoApp.getInitialTodoItems()
        };

        this.onEnter = this.onEnter.bind(this);
    }

    onEnter(event){
        if(event.key == 'Enter'){
            let currItems = this.state.todoItems.slice();
            let newItem = TodoApp.createTodoItem(currItems.length+1, event.target.value);
            console.log(event.key);
            console.log(currItems.toString());
            currItems.push(newItem);
            this.setState({todoItems: currItems});
            event.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <InsertBox onEnter={this.onEnter}/>
                <ol>
                    {this.state.todoItems}
                </ol>

            </div>
        );
    }

    static getInitialTodoItems() {
        return [];
    }

    static createTodoItem(index, content){
        return <TodoItem key={index} value={content} />;
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);

