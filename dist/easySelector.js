"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasySelector = void 0;
var array_1 = require("./modules/array");
var color_1 = require("./modules/color");
var number_1 = require("./modules/number");
var EasySelector = /** @class */ (function () {
    function EasySelector() {
        this.array = new array_1.RandomArray();
        this.color = new color_1.RandomColor();
        this.number = new number_1.RandomNumber();
    }
    return EasySelector;
}());
exports.EasySelector = EasySelector;
//# sourceMappingURL=easySelector.js.map