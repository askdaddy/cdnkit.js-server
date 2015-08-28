/**
 * Created by seven on 15/8/27.
 */
var express = require('express');
var http = require('http');
var proto = require('./app');
var util = require('./util');

function KitServer(options, callback) {


    var app = express();

    util.extend(app, proto);

    options = app._options = util.extend({}, options);
    util.debug = options.debug;
    console.log("debug:",util.debug);

    var path = options.path || '/';
    var port = options.port || 21000;
    var server;

    server = http.createServer(app);

    app._init(server);

    if (callback) {
        server.listen(port, function () {
            callback(server);
        });
    } else {
        server.listen(port);
    }

    return app;
}


exports = module.exports = KitServer;