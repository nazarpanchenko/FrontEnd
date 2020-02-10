const parseArray = arr => {
    const result = arr
        .map(el => Number.parseFloat(el));

    return result;
};

const elementList = [4, 5, 6, '4.17  K', Infinity, undefined];

console.log(parseArray(elementList));