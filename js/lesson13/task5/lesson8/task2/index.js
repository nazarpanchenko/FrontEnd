export default (obj) => {
    let arr = [];

    if (Object.keys(obj).length == 0) return [];

    for (let key in obj) {
        arr.push(obj[key]);
    }

    return arr;
};
