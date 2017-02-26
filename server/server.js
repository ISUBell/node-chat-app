const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();
//use Port if available, otherwise local port is 3000
const port = process.env.PORT || 3000;

console.log(__dirname + '/../public');
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
