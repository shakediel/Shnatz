// server.js
const express = require('express');
var path = require("path");
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/Shnatz'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/Shnatz/index.html'));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080, function () {
  console.log('client is up!');
});
