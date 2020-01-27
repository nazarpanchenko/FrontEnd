function checkIfSpecialNumber(num) {
    if (num % 3 == 0) {
        specialNumbers.push(num);
    }
}

const getSpecialNumbers = numbers => {
    let specialNumbers = [];

   numbers.forEach(function checkIfSpecialNumber(num) {
       if (num % 3 === 0) {
           specialNumbers.push(num);
       }
   });

    return specialNumbers;
};

getSpecialNumbers([1, 2, 3, 4, 5, 6]);