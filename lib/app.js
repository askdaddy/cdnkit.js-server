/**
 * Created by seven on 15/8/27.
 */

var util = require('./util');
var WebSocketServer = require('ws').Server;
var url = require('url');

var app = exports = module.exports = {};

app._init = function (server) {
    var self = this;
    util.log("start app._init . ");

    if (this.mountpath instanceof Array) {
        throw new Error("This app can only be mounted on a single path");
    }
    var path = this.mountpath;
    var path = path + (path[path.length - 1] != '/' ? '/' : '') + 'peer';

    // Create WebSocket server as well.
    this._wss = new WebSocketServer({path: path, server: server});

    this._wss.on('connection', function (socket) {
        var query = url.parse(socket.upgradeReq.url, true).query;
        var ip = socket.upgradeReq.socket.remoteAddress;
        util.log("on connection with query:", query);
        util.log("connected from:", ip);
    });

};