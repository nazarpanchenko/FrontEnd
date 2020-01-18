let sum = 0;

function getSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i <= arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

getSum([11, 22, 33, 55, 56]);