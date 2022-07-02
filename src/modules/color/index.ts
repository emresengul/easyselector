import { randomBetween } from "../../utils";
import { Color, HEX, RGB, RGBA } from "./utils";

export class RandomColor {
    hex(): HEX {
        const color: HEX = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        return color;
    }
    rgb(): RGB {
        const r = randomBetween(0, 255)
        const g = randomBetween(0, 255)
        const b = randomBetween(0, 255)
        const rgb: RGB = `rgb(${r},${g},${b})`
        return rgb
    }
    rgba(): RGBA {
        const r = randomBetween(0, 255)
        const g = randomBetween(0, 255)
        const b = randomBetween(0, 255)
        const a = randomBetween(0, 100) * 0.01
        const rgba: RGBA = `rgba(${r},${g},${b},${a})`
        return rgba
    }
}