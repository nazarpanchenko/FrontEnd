const concatProps = obj => {
    let arr = [];

    if (Object.keys(obj).length == 0) return [];

    for (let key in obj) {
        arr.push(obj[key]);
    }

    return arr;
};

const user = {
    name: 'Tom',
    key: 17
};

console.log(concatProps(user));