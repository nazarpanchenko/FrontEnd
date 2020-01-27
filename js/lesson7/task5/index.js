function squareArray(arr) {
    if (!Array.isArray(arr)) return null;

    let result = [];

    arr.forEach((num, arr) => {
        result.filter(num => {
            return num * num;
        });
    });

    return result;
}

squareArray([1, 2, 3, 4, 5 ,6]);