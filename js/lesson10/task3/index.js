const multiRound = num => {
    return [
        Math.round(num * 100) / 100,
        Math.floor(num * 100) / 100,
        Math.ceil(num * 100) / 100,
        Math.trunc(num * 100) / 100,
        num.toFixed(2)
    ];
};

num = [3.14, -6.38, 18.88, 29.19];

console.log(multiRound(num));