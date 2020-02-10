const getParsedIntegers = arr => {
    const result = [];

    arr.forEach(el => {
        if (Number.parseInt(el)) result.push(el);
    });

    return result;
};

const getParsedIntegersV2 = arr => {
    const result = [];

    arr.forEach(el => {
        if (parseInt(el)) result.push(el);
    });

    return result;
};

const getparsedFloats = arr => {
    const result = [];

    arr.forEach(el => {
        if (Number.parseFloat(el)) result.push(el);
    });

    return result;
};

const getParsedFloatsV2 = arr => {
    const result = [];

    arr.forEach(el => {
        if (parseFloat(el)) result.push(el);
    });

    return result;
};

const arr = [3.15, 2.16, 3.45, 9.19, 11.24];

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
