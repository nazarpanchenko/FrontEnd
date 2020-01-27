function squareArray(arr) {
    if (!Array.isArray(arr)) return null;

    let result = [];

    result.filter(function(num) {
        return num * 2;
    });

    return result;
}

squareArray([1, 2, 3, 4, 5 ,6]);