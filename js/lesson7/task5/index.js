function squareArray(arr) {
    if (!Array.isArray(arr)) return null;

    let result = [];

    arr.forEach((num, arr) => {
        result.push(num);
    });

    return result.filter(num => {
        return num * num;
    });
}

squareArray([1, 2, 3, 4, 5 ,6]);