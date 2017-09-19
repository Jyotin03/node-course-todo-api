var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require ('./db/mongoose');
var {Todo} = require('./models/Todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json())

app.post('/Todos', (req, res) => {
var Todo = new Todo({
  text : req.body.text
});

Todo.save().then((doc) => {
  res.send(doc);
}, (e) => {
res.status(400).send(e);
   });
});

app.listen(3000, () => {
  console.log('Started on Port 3000');
});
