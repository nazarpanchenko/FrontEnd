const getRandomNumbers = (arrLength, from, to) => {
    let result = [];

    for (let i = 0; i < arrLength; i++) {
        let isWrongRange = to < from,
            noNumbersBetween = (to - from < 1) && Math.ceil(to) === Math.ceil(from);

        if (isWrongRange || noNumbersBetween) {
            return null;
        }

        let rand = from + Math.random() * (to - from);

        result.push(Math.floor(rand));
    }

    return result;
};
  
console.log(getRandomNumbers(10, 2.6, 9.3));