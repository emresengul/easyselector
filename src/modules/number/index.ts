import { RandomNumberErrors } from './errors';
import { generateRandomNumbers, initConfig } from "../../utils";
import { randomMultipleOptions } from "./utils";
import { ErrorHandler } from '../../errorHandler';

export class RandomNumber {
    random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomMultiple(min: number, max: number, options?: Partial<randomMultipleOptions>): Array<number> {
        const { select, unique }: randomMultipleOptions = initConfig(options, { unique: true, select: 1 });
        if (max < select && unique) {
            throw new ErrorHandler(RandomNumberErrors.SELECT_VALUE_MUST_BE_LESS_THAN_MAX_VALUE, "SELECT_VALUE_MUST_BE_LESS_THAN_MAX_VALUE");
        }
        const numbers = generateRandomNumbers(select, max, unique)
        return numbers
    }
    randomGenerate(digitNumber: number) {
        const randomNumber = Math.floor(Math.random() * Math.pow(10, digitNumber))
        return randomNumber
    }
}