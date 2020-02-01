const concatProps = obj => {
    let arr = [];

    for (let key in user) {
        arr.push(user[key])
    }

    return arr;
};

const user = {
    name: 'Tom',
    key: 17
};

concatProps(user);