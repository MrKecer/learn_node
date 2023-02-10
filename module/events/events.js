const Logger = require("./logger");
const logger = new Logger();
//takip et
// emitter.on("connetciton", function () {
//     console.log("Bağlatı Kuruldu");
// })
logger.on("connection", function (args) {
    //başla
    console.log(args);
})
// emitter.emit("logout", { id: 1, message: "hi" })
logger.log("yusuf login")