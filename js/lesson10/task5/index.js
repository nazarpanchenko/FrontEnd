const getParsedIntegers = arr => {
    const result = [];

    arr.forEach(el => {
        result.push(Number.parseInt(el));
    });

    return result;
};

const getParsedIntegersV2 = arr => {
    const result = [];

    arr.forEach(el => {
        result.push(parseInt(el));
    });

    return result;
};

const getparsedFloats = arr => {
    const result = [];

    arr.forEach(el => {
        result.push(Number.parseFloat(el));
    });

    return result;
};

const getParsedFloatsV2 = arr => {
    const result = [];

    arr.forEach(el => {
        result.push(parseFloat(el));
    });

    return result;
};

const arr = [3.15, 2.16, 3.45, 9.19, 11.24];

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
