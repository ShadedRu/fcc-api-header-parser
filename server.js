var express = require('express');
//\([^)]+\)
var app = express();

app.get('/*', function(req, res) {
    console.log(req.headers);
    var client_ip = req.headers['x-forwarded-for'];
    var client_language = req.headers['accept-language'].split(',')[0];
    var client_software = req.headers['user-agent'].match(/\([^)]+\)/g)[0].replace(/[(|)]/g, '');
    var response = {
        ipaddress: client_ip,
        language: client_language,
        software: client_software
    };
    res.end(JSON.stringify(response));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
