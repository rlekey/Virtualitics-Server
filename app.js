var express = require('express');
var app = express();
var fs = require("fs");

var port = 3500

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json());

app.get('/', function (req, res) {
	fs.readFile( __dirname + "/" + "iris-test.csv", 'utf8', function (err, data) {
		//console.log( data );
		res.end( data );
	});
})

app.get('/new-data', function (req, res) {
	fs.readFile( __dirname + "/" + "new-data.csv", 'utf8', function (err, data) {
		//console.log( data );
		res.end( data );
	});
})

app.post('/submit-new', function (req, res) {
	fs.writeFile("new-data.csv", req.body.data, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log(req.body.data + " body saved to new-data.csv");
			}
		}); 
	res.end( "Data submitted" );
})


var server = app.listen(port, function () {

	console.log("Szechuan sauce app listening at http://localhost:%s", port)

})

