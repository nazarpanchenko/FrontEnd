function transformToObject(arr) {
    if (arr.length == 0) return {};

    let result = {};

    arr.forEach(function(item, i, arr) {
        result[i] = item;
    });

    return result;
}

transformToObject([1, 2, 3, 4, 5, 6, 'a', 'b']);