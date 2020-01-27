function flatArray(arr) {
    const copy = [...arr];

    return copy.reduce(function(acc, num) {
        return acc.concat(num);
    }, []);
}

flatArray([1, [2,, 1, 6], 3, 4, [6, 2, 1, 4], 8]);