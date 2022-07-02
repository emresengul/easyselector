export const initConfig = (argConfig, defaultConfig) => {
    return { ...defaultConfig, ...argConfig }
}

export const generateRandomNumbers = (total, limit, unique = true) => {
    const arr: number[] = [];
    while (arr.length < total) {
        var r = Math.floor(Math.random() * limit) + 1;
        if (unique && arr.indexOf(r) === -1) arr.push(r);
        else if (!unique) arr.push(r);
    }
    return arr
}

export const randomBetween = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
}
