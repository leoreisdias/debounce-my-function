"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debaunceMyFunction = void 0;
var debaunceMyFunction = function (fn, wait, time) {
    if (wait === void 0) { wait = 1000; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(time);
        time = setTimeout(function () {
            fn.apply(void 0, args);
        }, wait);
    };
};
exports.debaunceMyFunction = debaunceMyFunction;
