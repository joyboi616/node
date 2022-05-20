// Import HTTP module
var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Steban Pulido');
    response.write('\nStudent # 200455316');
    response.end();
}

// Create server to run on por 8000
http.createServer(onRequest).listen(8000);