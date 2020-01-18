const getSum = (a, b) => {
    let sum = 0;
    
    for (let i = a; a <= b; i++) {
        sum += (a + b);
    }

    return sum;
}

getSum(4, 32);