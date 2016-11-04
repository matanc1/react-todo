import React from 'react';

export default class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.value}</li>
                <a href="#"> hello </a>
            </div>
        )
    }
}
