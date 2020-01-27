function squareArray(arr) {
    if (!Array.isArray(arr)) return null;

    let result = [];

    result.forEach((num, arr) => {
        result.push(num);
        return num * num;
    });

    return result;
}

squareArray([1, 2, 3, 4, 5 ,6]);