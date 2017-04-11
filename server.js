var express = require('express');
//\([^)]+\)
var app = express();

app.get('/*', function(req, res) {
    var response = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].match(/\([^)]+\)/g)[0].replace(/[(|)]/g, '')
    };
    res.end(JSON.stringify(response));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
