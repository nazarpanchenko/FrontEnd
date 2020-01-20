function squareArray(arr) {
    if (!isArray(arr)) return null;

    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }

    return arr;
}

squareArray([3, 6, 9, 15, 18]);