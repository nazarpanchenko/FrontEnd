function cloneArr(arr) {
    let clonedArr = [];

    for (let i = 0; i < arr.length; i++) {
        clonedArr.push(arr[i]);
    }

    return clonedArr;
}

cloneArr([6, 2, 9, 1, 23, 21, 16, 2]);