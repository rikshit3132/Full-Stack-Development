// ip:port

const http = require('http');

const server = http.createServer((req,res) => {
  // handling of request happening
  // res.setHeader("Content-Type","text/plain");
  // res.write("Hello,World from server");
//   res.setHeader("Content-Type","text/html");
//   res.write("<html><head><title>Node.js HTTP server</title></head><body>");
//   res.write("<h1> Hello, Iam from Node JS Chapter-One </h1>")
//   res.write("</body></html>")
res.setHeader("Content-Type", "application/json");
const jsonData = {
    message:"Hello from Node.js Server",
    date: new Date()
}
const jsonRes = JSON.stringify(jsonData);
res.write(jsonRes)
  res.end();
})
const port = 3000;
const host = 'localhost'
server.listen(port,host,()=>{
    console.log(`server is listening on http://${host}:${port}`)
})