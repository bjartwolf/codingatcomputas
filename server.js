var http = require('http');
http.createServer(function (req, res) {
    // 200 betyr ok p� internett (eller, http, da)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hei \n');
    res.end('Thomas! \n');
    res.end('Dette er Coding at Computas sin nettside! \n');
}).listen(process.env.port);
