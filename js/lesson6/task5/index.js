function squareArray(arr) {
    if (!Array.isArray(arr)) return null;

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    for (let j = 0; j < newArr.length; j++) {
        newArr[i] *= newArr[j];
    }

    return newArr;
}

squareArray([3, 6, 9, 15, 18]);