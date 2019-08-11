var http = require('http');

http.createServer(function (req,res){
    res.end(" response without content head");
}).listen(4000);

console.log("Server started at 4000, press ctrl-c to quit");
