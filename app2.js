var express = require('express');

var app2 = express();

console.log('server starting');

app2.get('/', function(req, res){
    res.send('Hello from inside a container! my 2nd app');
});

app2.listen(8081);
