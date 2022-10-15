const http = require("http");
const port = 2000;
const fs = require("fs");


const server = http.createServer((req,res) => {

    const data = fs.readFileSync("json1.json", "utf-8"); 
    const ObjData = JSON.parse(data);
    
    if (req.url == "/") {
        res.end("My name is pakistan");
    }
    else if (req.url == "/contact") {
        
      res.end("pakistan is growing day by day");
    }
    else if (req.url == "/userapi") {
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(data);
        
    }
});

server.listen(port,  "127.0.0.1", () => {
      console.log("Listening to the port no ", port);}    
    
    );