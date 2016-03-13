var express = require('express');
livereload = require('express-livereload');

var app = express();
livereload(app, config={});

app.use(express.static("public"));

app.listen(8080);