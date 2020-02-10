const getMaxAbsoluteNumber = numbers => {
    if (!Array.isArray(numbers)) return null;

    const absoluteValues = numbers
        .map(num => Math.abs(num));

    const max = Math.max(...absoluteValues);

    return max;
};

console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));