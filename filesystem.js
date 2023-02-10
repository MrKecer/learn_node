const fs = require("fs");
const file = fs.readdir("./", function (error, data) {

    if (error) {
        console.log(error);
    } else { console.log(data); }
});

//read file
const data = fs.readFile("html.html", "utf-8", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);

    }

})
//delete and create file
fs.writeFile("deneme.txt", "Hello World", function (error) {
    if (error) {
        console.log(error);
    }
})
//create and update file
fs.appendFile("deneme.txt", "Hello World...", function (error) {
    if (error) {
        console.log(error);
    }
})
//sil
fs.unlink("deneme.txt", function () {

});