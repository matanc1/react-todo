import React from 'react'
import ReactDOM from 'react-dom'
import TodoAppContainer from './todo/todoapp.container.jsx'
import 'babel-polyfill'
import {Provider} from 'react-redux'
import { store } from './app/store.js'

require('./app.css');

ReactDOM.render(
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
);

