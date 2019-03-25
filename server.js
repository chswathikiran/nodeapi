var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/models'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://127.0.0.1:27017/EemployeeDB'); 
var db = "mongodb+srv://chswathikiran:chswathikiran@cluster0-rjrk9.mongodb.net/test?retryWrites=true"
mongoose.connect(db)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });