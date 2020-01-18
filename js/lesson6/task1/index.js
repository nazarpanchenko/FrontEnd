const numbers = [1, 2, 4];

const numOfEl = numbers.length;

function getArrayBounds(arr) {
    return [arr.length, arr[0], arr.length[-1]];
}

getArrayBounds([1, 2, 3, 4, 5, 6]);