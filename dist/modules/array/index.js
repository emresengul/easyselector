"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomArray = void 0;
var errors_1 = require("./errors");
var functions_1 = require("./../../utils/functions");
var RandomArray = /** @class */ (function () {
    function RandomArray() {
    }
    RandomArray.prototype.random = function (array) {
        var randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };
    RandomArray.prototype.randomMultiple = function (array, options) {
        var _a = (0, functions_1.initConfig)(options, { unique: true, select: 1 }), select = _a.select, unique = _a.unique;
        if (array.length < select) {
            throw { errorKey: "ARRAY_LENGTH_LESS_THAN_SELECT", message: errors_1.RandomArrayErrors.ARRAY_LENGTH_LESS_THAN_SELECT };
        }
        var numbers = (0, functions_1.generateRandomNumbers)(select, array.length, unique);
        return numbers.map(function (number) { return array[number - 1]; });
    };
    return RandomArray;
}());
exports.RandomArray = RandomArray;
//# sourceMappingURL=index.js.map