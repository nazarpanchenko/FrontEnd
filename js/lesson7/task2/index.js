function sortDesc(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr;
}

sortArray([1, 2, 4, 6, 8, 10]);