/**
 * Created by matan on 05/11/2016.
 */
import React from 'react';
import axios from 'axios';
import TodoItems from '../components/todoitem/todoitem.jsx';

export default class TodoDB{
    static setInitialTodoItems(setCallback, deleteFunc) {
        axios.get('/get/data').then(function(response){
            let items = response.data;
            let todoItems = [];
            for (let item of items){
                let newItem = TodoItems.createTodoItem(item.index, item.value, deleteFunc);
                todoItems.push(newItem);
            }

            setCallback(todoItems);
        });
    }

    static addItem(index, value){
        axios.post('/send/data', {index: index, value: value}).then(
            function(res){});
    }

    static deleteItem(newItems){
        axios.post('/delete', newItems).then(
            function(res){});
    }
}
