const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("hello world");
        res.end();
    }
    if (req.url === "/api/products") {
        res.write("product list");
        res.end();
    }
});
server.listen(2020);
console.log("2020 portu dineliyor");
server.on("connection", function () {
    console.log("yeni bir bağlantı sağlandı");
});
