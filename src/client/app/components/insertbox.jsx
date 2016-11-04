import React from 'react';

export default class InsertBox extends React.Component{
    render(){
        return <input onKeyPress={this.props.onEnter} placeholder="What needs to be done?" />;
    }
}

