let sum = 0;

for (let i = 1; i <= 1000; i++) {
    sum += i;
}

let quotient = sum / 1234,
    remainder = sum % 1234;

quotient > remainder ? console.log('true') : console.log('false');