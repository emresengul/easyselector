import { RandomArray } from "./modules/array";
import { RandomColor } from "./modules/color";

export class RandomSelector {
    readonly array: RandomArray = new RandomArray();
    readonly color: RandomColor = new RandomColor();
}