const express = require("express");
const app = express();

// Middleware for parsing form data
app.use(express.urlencoded({ extended: false }));

app.get("/product-add", (req, res, next) => {
    res.send(`
    <html>
      <head>
        <title>Add New Product</title>
      </head>
      <body>
        <form method="POST" action="/product">
          <label for="productName">Product Name:</label>
          <input type="text" id="productName" name="productName">
          <input type="submit" value="Save Product">
        </form>
      </body>
    </html>
  `);
});

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.send(req.body.productName);
    res.redirect("/product");
});

app.get("/", (req, res, next) => {
    res.send("<h1>Main Page</h1>");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});