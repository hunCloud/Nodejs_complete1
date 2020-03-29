var http=require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/http'});
    res.end('Hello, hung');
}).listen(8888);

exports.myDateTime=function(){
    return Date();
};

