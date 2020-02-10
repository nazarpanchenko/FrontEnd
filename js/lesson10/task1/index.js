const getFiniteNumbers = arr => {
    const result = [];

    arr.forEach(el => {
        result.push(Number.isFinite(el));
    });

    return result;
};

const getFiniteNumbersV2 = arr => {
    const result = [];

    arr.forEach(el => {
        result.push(isFinite(el));
    });

    return result;
};

const getNaN = arr => {
    const result = [];

    arr.forEach(el => {
        result.push(Number.isNaN(el));
    });

    return result;
};

const getNaNV2 = arr => {
    const result = [];

    arr.forEach(el => {
       result.push(isNaN(el));
    });

    return result;
};

const getIntegers = arr => {
    const result = [];

    arr.forEach(el => {
       result.push(Number.isInteger(el));
    });

    return result;
};

const arr = [2, 6, Infinity, NaN, null, undefined, 0];

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));