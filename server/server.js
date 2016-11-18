/**
 * Created by matan on 05/11/2016.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./todo');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/static', express.static('public'));

app.listen(3000, function () {
    console.log("Listening on 3000");
});

app.get('/get/data', function (req, res) {
    Todo.find({}, function (err, users) {
        if (err)
            console.log("Error getting users");
        const usersToSend = users.map(user => { return {id: user._id, value: user.value}});
        res.send(JSON.stringify(usersToSend));
    });
});

app.post('/send/data', function (req, res) {
    var data = req.body;
    var newTodo = new Todo(data);
    newTodo.save(function (err, todo) {
        if (err)
            console.log('Error!');
        res.send(todo.id);
    });
});

app.post('/delete', function (req, res) {
    var idToDelete = req.body.id;
    Todo.remove({_id: idToDelete}, delErr);
    res.status(200).send();
    function delErr(err) {
        if (err) {
            console.log("Error deleting user");
            console.log(err);
        }
    }
});

