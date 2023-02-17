const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.statusMessage = "Ok.";
    //body
    res.write(JSON.stringify({ name: "PC", blabla: "Monster" }));
    res.end();
});

server.listen(3200);
console.log("Listening 3300");