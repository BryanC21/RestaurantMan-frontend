var express = require('express');
var port = process.env.PORT || 3000;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'view','build');

app.use(express.static(publicDir))

app.all('*', (req, res) => {
    res.sendFile(publicDir + '/index.html');
  });

app.listen(port);
module.exports = app;
