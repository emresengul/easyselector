"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomSelector = void 0;
var array_1 = require("./modules/array");
var color_1 = require("./modules/color");
var number_1 = require("./modules/number");
var RandomSelector = /** @class */ (function () {
    function RandomSelector() {
        this.array = new array_1.RandomArray();
        this.color = new color_1.RandomColor();
        this.number = new number_1.RandomNumber();
    }
    return RandomSelector;
}());
exports.RandomSelector = RandomSelector;
//# sourceMappingURL=randomselector.js.map