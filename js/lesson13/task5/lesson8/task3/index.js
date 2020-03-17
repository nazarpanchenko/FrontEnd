export default (obj, keys) => {
    let result = {};

    for (let el of keys) {
        if (!result.hasOwnProperty(el) && obj.hasOwnProperty(el)) result[el] = obj[el];
    }

    console.log(result);

    return Object.keys(result).length == 0 ? {} : result;
};
