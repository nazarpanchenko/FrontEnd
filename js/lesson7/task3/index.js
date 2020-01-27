function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;

    return arr.slice().reverse();
}

reverseArray([1, 2, 3, 4, 5, 6]);