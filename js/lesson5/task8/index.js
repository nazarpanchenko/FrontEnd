function sumTo(from, to) {
    let sum = 0;

    for (let i = from; i <= to; i++) {
        sum += i;
    }

    return sum;
}

function compareSums(a, b, c, d) {
    return sumTo(a, b) > sumTo(c, d) ? true : false;
}

compareSums(4, 12, 15, 64);