const superRound = (num, precision) => {
    let toPrecision = '1';

    for (let i = 0; i < precision; i++) {
        toPrecision += '0';
    }

    toPrecision = +toPrecision;

    return  [
        Math.floor(num * toPrecision) / toPrecision,
        Math.round(num * toPrecision) /  toPrecision,
        Math.ceil(num * toPrecision) /  toPrecision,
        Math.trunc(num * toPrecision) /  toPrecision,
        +num.toFixed(precision)
    ];
}

superRound(-Math.PI, 3);