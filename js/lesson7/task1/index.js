const getSpecialNumbers = numbers => {
    let specialNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            specialNumbers,push(numbers[i]);
        }
    }

    return specialNumbers;
};

getSpecialNumbers([1, 2, 3, 4, 5, 6]);