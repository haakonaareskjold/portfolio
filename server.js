const PORT = process.env.PORT || 80;
var express = require('express');

var app = express();

app.listen(PORT)

app.use('/', express.static('public'))

