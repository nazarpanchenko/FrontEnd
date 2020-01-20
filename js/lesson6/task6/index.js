function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;

    let newArr = [];

    for (let i = arr.length; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}

reverseArray([1, 2, 3, 4, 5, 6]);