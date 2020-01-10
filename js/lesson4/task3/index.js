let m = 2,
    n = 10,
    result = 1;

for (let i = m; i <= n; i++) {
    if (i % 2)  result *= m;
}

console.log('Result: ' + result);