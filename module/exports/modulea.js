var firstName = "yusuf";
var log = function log(name) {
    console.log(name);

}
// module.exports.log = log;
// module.exports.firstName = firstName;
module.exports = {
    firstName: firstName,
    log: log
}