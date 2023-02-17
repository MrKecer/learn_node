const http = require("http");
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == "/") {
        res.write("main");

    } else {

    }
});

//listen
server.listen(3300);
console.log("Listening 3300 port")