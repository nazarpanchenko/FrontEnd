function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return [arr.length, arr[0], arr[length - 1]];
}

const arrayBounds = getArrayBounds([1, 2, 3, 4, 5, 6]);