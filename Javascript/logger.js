
var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports = log;
// NOT Necessary for user interface module.exports.endPoint = url;