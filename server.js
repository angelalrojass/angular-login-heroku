const express = require('express');
const path = require('path');
 
const app = express();

app.use(express.static(__dirname + './dist/login-api-heroku'));
 
app.get('/*', function(req,res) {
 
res.sendFile('index.html', {root: 'dist/login-api-heroku'});
});
 
app.listen(process.env.PORT || 4000);