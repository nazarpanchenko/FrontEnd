function getSpecialNumbers(from, to) {
    let specialNumbers = [];

    for (let i = from; i <= to; i++) {
        if (i % 3 == 0) {
            specialNumbers.pop(i);
        }
    }

    return specialNumbers;
}

getSpecialNumbers(10, 30);