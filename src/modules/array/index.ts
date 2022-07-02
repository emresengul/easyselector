import { ErrorHandler } from './../../errorHandler';
import { RandomArrayErrors } from './errors';
import { initConfig, generateRandomNumbers } from './../../utils/functions';
import { randomMultipleOptions, randomOptions } from "./utils";

export class RandomArray {
    random(array: Array<any>): any {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    randomMultiple(array: Array<any>, options?: Partial<randomMultipleOptions>): Array<any> {
        const { select, unique }: randomOptions = initConfig(options, { unique: true, select: 1 });
        if (array.length < select && unique) {
            throw new ErrorHandler(RandomArrayErrors.ARRAY_LENGTH_LESS_THAN_SELECT, "ARRAY_LENGTH_LESS_THAN_SELECT");
        }
        const numbers = generateRandomNumbers({ min: 0, max: array.length, total: select, unique });
        return numbers.map(number => array[number - 1]);
    }
}