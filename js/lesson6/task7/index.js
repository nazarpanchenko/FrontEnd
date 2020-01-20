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

    console.log(sortedArr);
     
    return sortedArr;
}

function sortDesc(array) {
    let sortedArr = [];


}

sortAsc([6, 0, 13, 28, 14, 5, 82, 9]);