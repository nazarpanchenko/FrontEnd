function squareArray(arr) {
    if (!isArray(arr)) return null;

    let result = arr.filter(function(num) {
        return num * 2;
    });

    return result;
}

squareArray([1, 2, 3, 4, 5 ,6]);