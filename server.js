const PORT = process.env.PORT || 3000;
var express = require('express');

var app = express();

app.listen(PORT, ()  => {
	console.log(` app listening at http://localhost:${PORT}`)
});


app.use('/', express.static('public'))

