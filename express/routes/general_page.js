const express = require("express");
const app = express();
const adminRouts = require("./admin.js");
const userRouts = require("./user.js");

app.use(userRouts);
app.use(adminRouts);
// Middleware for parsing form data




app.listen(3000, () => {
    console.log("listening on port 3000");
});