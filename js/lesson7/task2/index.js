function sortDesc(arr) {
    const copy = [...arr];
    
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr;
}

sortDesc([1, 2, 4, 6, 8, 10]);