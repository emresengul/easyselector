"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBetween = exports.generateRandomNumbers = exports.initConfig = void 0;
var initConfig = function (argConfig, defaultConfig) {
    return __assign(__assign({}, defaultConfig), argConfig);
};
exports.initConfig = initConfig;
var generateRandomNumbers = function (_a) {
    var min = _a.min, max = _a.max, total = _a.total, unique = _a.unique;
    var arr = [];
    while (arr.length < total) {
        var r = Math.floor((min + Math.random() * (max - min)) + 1);
        if (unique && arr.indexOf(r) === -1)
            arr.push(r);
        else if (!unique)
            arr.push(r);
    }
    return arr;
};
exports.generateRandomNumbers = generateRandomNumbers;
var randomBetween = function (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};
exports.randomBetween = randomBetween;
//# sourceMappingURL=functions.js.map