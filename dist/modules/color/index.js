"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomColor = void 0;
var utils_1 = require("../../utils");
var RandomColor = /** @class */ (function () {
    function RandomColor() {
    }
    RandomColor.prototype.hex = function () {
        var color = "#".concat(Math.floor(Math.random() * 16777215).toString(16));
        return color;
    };
    RandomColor.prototype.rgb = function () {
        var r = (0, utils_1.randomBetween)(0, 255);
        var g = (0, utils_1.randomBetween)(0, 255);
        var b = (0, utils_1.randomBetween)(0, 255);
        var rgb = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
        return rgb;
    };
    RandomColor.prototype.rgba = function () {
        var r = (0, utils_1.randomBetween)(0, 255);
        var g = (0, utils_1.randomBetween)(0, 255);
        var b = (0, utils_1.randomBetween)(0, 255);
        var a = (0, utils_1.randomBetween)(0, 100) * 0.01;
        var rgba = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
        return rgba;
    };
    return RandomColor;
}());
exports.RandomColor = RandomColor;
//# sourceMappingURL=index.js.map