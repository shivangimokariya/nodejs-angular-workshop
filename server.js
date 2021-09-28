var http=require("http");
var a=20;
var b=30;
var c=a+b;
var mymsg = "A value is " + a + "B value is" + b +"sum is "+ c ;
http.createServer(function(Request,Response)
{
    Response.end('<h1>Hello world in node js</h1>' + mymsg);

}).listen(3000);
console.log("Server is started at http://127.0.0.1:3000");