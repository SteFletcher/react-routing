var express = require('express');
livereload = require('express-livereload');

var app = express();
livereload(app, config={});

app.use(express.static("public"));
app.listen(8080);
console.log('Serving static content from /public on port 8080');