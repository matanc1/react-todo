/**
 * Created by matan on 05/11/2016.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('bin'));

app.listen(3000, function(){
    console.log("Listening on 3000");
});


app.get('/', function(req, res){
    let filePath = path.resolve('bin/index.html');
    console.log(filePath);
    res.sendFile(filePath);
});
