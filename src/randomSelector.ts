import { RandomArray } from "./modules/array";
import { RandomColor } from "./modules/color";
import { RandomNumber } from "./modules/number";

export class RandomSelector {
    readonly array: RandomArray = new RandomArray();
    readonly color: RandomColor = new RandomColor();
    readonly number: RandomNumber = new RandomNumber()
}