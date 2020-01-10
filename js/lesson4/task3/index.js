let m = 1,
    n = 10,
    result = 0;

for (let i = m; m <= n; m++) {
    if (i % 2 == 0) {
        result += m * n;
        console.log('Result: ' + result);
    }
}