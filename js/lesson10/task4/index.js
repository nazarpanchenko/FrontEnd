const getMaxAbsoluteNumber = numbers => {
    const absoluteValues = numbers
        .map(num => Math.abs(num));

    const max = Math.max(...absoluteValues);

    return max;
};

console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));