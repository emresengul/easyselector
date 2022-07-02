import { randomMultipleOptions } from "./utils";
export declare class RandomNumber {
    random(min: number, max: number): number;
    randomMultiple(min: number, max: number, options?: Partial<randomMultipleOptions>): Array<number>;
    randomGenerate(digitNumber: number): number;
}
