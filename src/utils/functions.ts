export const initConfig = (argConfig, defaultConfig) => {
    return { ...defaultConfig, ...argConfig }
}

export const generateRandomNumbers = ({ min, max, total, unique }) => {
    const arr: number[] = [];
    while (arr.length < total) {
        const r = Math.floor((min + Math.random() * (max - min)) + 1);
        if (unique && arr.indexOf(r) === -1) arr.push(r);
        else if (!unique) arr.push(r);
    }
    return arr
}

export const randomBetween = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
}
