const url = require("url");
const address = "https://nodejs.org/dist/latest-v19.x/docs/api/url.html";
let result = url.parse(address, true);
console.log(result);