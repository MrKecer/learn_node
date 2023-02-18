const express = require("express");
const app = express();
app.get("/", (req, res) => { res.send("Hello World"); });
app.get("/api/product", (req, res) => { res.send("ürünler listelendi") });
app.listen("3000", () => {
    console.log("3000 portu dinleniyor");
})