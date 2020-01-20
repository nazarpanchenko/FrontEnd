function sortAsc(arr) {
    let sortedArr = [];

    for (let i = 0; i < arr.length; i++) {
        sortedArr.push(arr[i]);
    }

    for (let j = 0, endJ = arr.length - 1; j < endJ; j++) {
        let wasSwap = false;

        for (let k = 0, endK = endJ - j; k < endK; k++) {
            if (sortedArr[k] > sortedArr[k + 1]) {
                [sortedArr[k], sortedArr[k + 1]] = [sortedArr[k + 1], sortedArr[k]];
                wasSwap = true;
            }
        }

        if (!wasSwap) break;
    }
     
    return sortedArr;
}

function sortDesc(arr) {
    let sortedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        sortedArr.push(arr[i]);
    }

    for (let j = 0, endJ = arr.length - 1; j < endJ; j++) {
        let wasSwap = false;

        for (let k = 0, endK = endJ - j; k < endK; k++) {
            if (sortedArr[k] > sortedArr[k + 1]) {
                [sortedArr[k], sortedArr[k + 1]] = [sortedArr[k + 1], sortedArr[k]];
                wasSwap = true;
            }
        }

        if (!wasSwap) break;
    }

    return sortedArr.reverse();
}

sortAsc([6, 0, 13, 28, 14, 5, 82, 9]);
sortDesc([6, 0, 13, 28, 14, 5, 82, 9]);