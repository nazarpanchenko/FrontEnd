function getArrayBound(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return [arr.length, arr[0], arr[length - 1]];
}

const arrayBound = getArrayBound([1, 2, 3, 4, 5, 6]);