var express = require('express')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')

var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(function(req, res, next){
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
		next();
	})
});

app.get('/', function(req, res) {
	res.type('application/json');
	res.send(JSON.stringify(messages));
});

app.post('/', function(req, res) {
	messages.push(req.body);
	res.send(req.body);
});

app.listen(12200);

var Mammal = mongoose.model('Mammal', new mongoose.schema ({
	name: String,
	type: String,
	year_extinct: Number
}))



