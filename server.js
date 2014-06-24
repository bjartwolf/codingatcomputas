var http = require('http');
http.createServer(function (req, res) {
    // 200 betyr ok p� internett (eller, http, da)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Erling \n');
}).listen(process.env.port);

<FORM NAME="myform" ACTION="" METHOD="GET">
Enter something in the box: <BR>
<INPUT TYPE="text" NAME="inputbox" VALUE=""><P>
<INPUT TYPE="button" NAME="button" Value="Click" onClick="testResults(this.form)">
</FORM>
