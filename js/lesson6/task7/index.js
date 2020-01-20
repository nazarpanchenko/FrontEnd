function sortAsc(array) {
    let sortedArr = [];

    for (let i = 0; i < arr.length; i++) {
        sortedArr.push(arr[i]);
    }

    for (let j = 0, endJ = arr.length - 1; j < endJ; j++) {
        let wasSwap = false;

        for (let k = 0, endK = endK - k; j < endK; k++) {
            if (arr[k] > arr[k + 1]) {
                [sortedArr[k], sortedArr[k + 1]] = [sortedArr[k + 1], sortedArr[k]];
                wasSwap = true;
            }
        }

        if (!wasSwap) break;
    }
     
    return sortedArr;
}

function sortDesc(array) {
    let sortedArr = [];


}

sortAsc();