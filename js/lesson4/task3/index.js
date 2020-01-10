let m = 2,
    n = 10,
    result = 1;

for (let i = m; i <= n; i++) {
    if (i % 2)  result *= i;
}

console.log('Result: ' + result);