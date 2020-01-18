const getSum = (a, b) => {
    let sum = 0;
    
    for (let i = a; a <= b; i++) {
        if (i % 2 == 0) sum += i;
    }

    return sum;
}

getSum(4, 32);