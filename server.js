var express = require('express');
var port = process.env.PORT || 80;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'view','build');

app.use(express.static(publicDir))

app.all('*', (req, res) => {
    res.sendFile(publicDir + '/index.html');
  });

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));
module.exports = app;
