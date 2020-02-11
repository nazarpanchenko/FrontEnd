const multiRound = num =>  [
    Math.abs(Math.round(num * 100) / 100),
    Math.abs(Math.floor(num * 100) / 100),
    Math.abs(Math.ceil(num * 100) / 100),
    Math.abs(Math.trunc(num * 100) / 100),
    Math.abs(+num.toFixed(2))
];

console.log(multiRound(Math.PI));
console.log(multiRound(-Math.PI));