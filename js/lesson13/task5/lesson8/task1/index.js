export default (arr) => {
    if (arr.length == 0) return {};

    let result = {};

    arr.forEach(function(item, arr) {
        result[item] = item;
    });

    return result;
};
