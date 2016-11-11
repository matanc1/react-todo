/**
 * Created by matan on 06/11/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todoapp/todos');

var todoSchema = new Schema({
    value: String
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
