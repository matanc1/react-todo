import React from 'react';

require('./insertbox.css');
export default class InsertBox extends React.Component {
    render() {
        return <input className="new-todo" placeholder="What needs to be done?"
                      onKeyPress={this.props.addTodo} />;
    }
}

