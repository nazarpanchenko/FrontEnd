const getTotalPrice = numbers => {
    let sum = 0;

    numbers.forEach(el => {
        sum += el;
    });

    return '$' + sum.toFixed(Math.floor(sum));
};

const numbers = [6, 0, 3, 8, 12, 24, 11, 9];

console.log(getTotalPrice(numbers));