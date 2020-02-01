const concatProps = obj => {
    let arr = [];

    if (Object.keys(obj).length == 0) return [];

    for (let key in user) {
        arr.push(user[key]);
    }

    return arr;
};

const user = {
    name: 'Tom',
    key: 17
};

console.log(concatProps(user));