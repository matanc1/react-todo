/**
 * Created by matan on 05/11/2016.
 */
import React from 'react';
import axios from 'axios';

export default class TodoDB {
    static getInitialTodoItems() {
        return axios.get('/get/data')
            .then(response => response.data);
    }

    static addItem(value) {
        return axios.post('/send/data', {value: value})
            .then((response) => response.data );
    }

    static deleteItem(id) {
        return axios.post('/delete', {id: id});
    }
}
