const getFiniteNumbers = arr => {
    const result = [];

    arr.forEach(el => {
        if (Number.isFinite(el)) result.push(el);
    });

    return result;
};

const getFiniteNumbersV2 = arr => {
    const result = [];

    arr.forEach(el => {
        if (isFinite(el)) result.push(el);
    });

    return result;
};

const getNaN = arr => {
    const result = [];

    arr.forEach(el => {
        if (Number.isNaN(el)) result.push(el);
    });

    return result;
};

const getNaNV2 = arr => {
    const result = [];

    arr.forEach(el => {
        if (isNaN(el)) result.push(el);
    });

    return result;
};

const getIntegers = arr => {
    const result = [];

    arr.forEach(el => {
        if (Number.isInteger(el)) result.push(el);
    });

    return result;
};

const arr = [2, 6, Infinity, NaN, null, undefined, 0];

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));