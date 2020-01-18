function swap(arr) {
    const [start, ...rest] = arr;

    return [...rest, start];
}

swap([11, 22, 33, 56, 66]);