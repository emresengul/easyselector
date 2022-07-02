"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
var errors_1 = require("./errors");
var utils_1 = require("../../utils");
var RandomNumber = /** @class */ (function () {
    function RandomNumber() {
    }
    RandomNumber.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    RandomNumber.prototype.randomMultiple = function (min, max, options) {
        var _a = (0, utils_1.initConfig)(options, { unique: true, select: 1 }), select = _a.select, unique = _a.unique;
        if (max < select) {
            throw { errorKey: "SELECT_VALUE_MUST_BE_LESS_THAN_MAX_VALUE", message: errors_1.RandomNumberErrors.SELECT_VALUE_MUST_BE_LESS_THAN_MAX_VALUE };
        }
        var numbers = (0, utils_1.generateRandomNumbers)(select, max, unique);
        return numbers;
    };
    RandomNumber.prototype.randomGenerate = function (digitNumber) {
        var randomNumber = Math.floor(Math.random() * Math.pow(10, digitNumber));
        return randomNumber;
    };
    return RandomNumber;
}());
exports.RandomNumber = RandomNumber;
//# sourceMappingURL=index.js.map