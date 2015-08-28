/**
 * Created by seven on 15/8/27.
 */


var util = {
    debug: false,
    inherits: function (ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    },
    extend: function (dest, source) {
        source = source || {};
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        }
        return dest;
    },
    randomId: function () {
        return (Math.random().toString(18) + '0000000000000000000').substr(2, 8);
    },
    log: function () {
        console.info("welog debug:",util.debug);
        if (util.debug) {
            var err = false;
            var copy = Array.prototype.slice.call(arguments);
            copy.unshift('Kit: ');
            for (var i = 0, l = copy.length; i < l; i++) {
                if (copy[i] instanceof Error) {
                    copy[i] = '(' + copy[i].name + ') ' + copy[i].message;
                    err = true;
                }
            }
            err ? console.error.apply(console, copy) : console.log.apply(console, copy);
        }
    },
    Now: function () {
        var date = new Date();
        //返回当前毫秒时间戳
        return date.getTime();
    }
};

module.exports = util;