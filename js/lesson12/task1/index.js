const calc = expression => {
    const [a, operator, b] = expression.split(' ');
    let result;

    switch (a[1]) {
        case "+":
            result = Number(a) + +b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }

    return `${expression} = ${result}`;
};

calc('6 - 9');