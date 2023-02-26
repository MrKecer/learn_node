const express = require("express");
const app = express(); app.use("/", (req, res, next) => {

    console.log("loglama yapıldı");
    next();

});
app.use("/product", (req, res, next) => {

    res.send("<h1>Adding Product</h1>");
});
app.use("/product-list", (req, res, next) => {

    res.send("<h1>List Product</h1>");
});


app.listen("3000", () => {
    console.log("3000 portu dinleniyor");
})