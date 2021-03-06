const pickProps = (obj, keys) => {
    let result = {};

    for (let el of keys) {
        if (!result.hasOwnProperty(el) && obj.hasOwnProperty(el)) result[el] = obj[el];
    }

    return Object.keys(result).length == 0 ? {} : result;
};

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

const keys = ['a', 'b', 'e'];

pickProps(obj, keys);