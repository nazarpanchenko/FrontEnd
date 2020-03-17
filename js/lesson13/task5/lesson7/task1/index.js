export default (numbers) => {
    let specialNumbers = [];

    numbers.forEach(function checkIfSpecialNumber(num) {
        if (num % 3 === 0) {
            specialNumbers.push(num);
       }
    });

    return specialNumbers;
};