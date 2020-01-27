function sortDesc(arr) {
    const copy = [...arr];

    copy.sort(function(a, b) {
        return b - a;
    });

    return copy;
}

sortDesc([1, 2, 4, 6, 8, 10]);