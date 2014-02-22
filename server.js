var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('connection success');
});

var mammalSchema = new mongoose.Schema(
	{ 
		name: 'string', 
		type: 'string',
		year_extinct: Number 
	}
);

var extinctMammal = mongoose.model('extinctMammal', mammalSchema);

app.use(express.bodyParser());

app.listen(8888);




