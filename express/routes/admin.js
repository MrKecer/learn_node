const express = require("express");
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.get("/product-add", (req, res, next) => {
  res.send(`
    <html>
      <head>
        <title>Add New Product</title>
      </head>
      <body>
        <form method="POST" action="/admin/product-add">
          <label for="productName">Product Name:</label>
          <input type="text" id="productName" name="productName">
          <input type="submit" value="Save Product">
        </form>
      </body>
    </html>
  `);
});

router.post("/admin/product-add", (req, res, next) => {
  console.log(req.body);
  res.send(req.body.productName);
  res.redirect("/admin/product-add");


});
module.exports = router;
