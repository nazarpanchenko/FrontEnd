const calc = expression => {
    const a = expression.split('');

    switch (a[1]) {
        case "+":
            return Number(a[0]) + Number(a[2]);
            break;
        case "-":
            return a[0] - a[2];
    }
};

calc('1 + 2');