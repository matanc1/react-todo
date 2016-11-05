import React from 'react';
import InsertBox from '../../components/insertbox/insertbox.jsx'

require('./todoappcontainer.css');

export default class TodoAppContainer extends React.Component {
    render() {
        return (
            <div className="todo">
                <div className="todo-container">
                    <InsertBox onEnter={this.props.onEnter}/>
                    <ol>
                        {this.props.todoItems}
                    </ol>
                </div>
            </div>
        );
    }
}