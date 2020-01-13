let m = 10,
    n = 50,
    result = 0;

for (let i = m; i <= n; i++) {
    if (i % 2 == 0 && i % 4 != 0) {
        result += i;
    } 
    else if (i % 3 == 0) {
        result -= i;
    }
    else if (i % 4 == 0) {
        result *= i;
    }
    else {
        continue;  
    }

    if (i % 2 == 0 || i % 4 != 0 || i % 3 == 0 || i % 4 == 0) {
        console.log(i);
    }
}