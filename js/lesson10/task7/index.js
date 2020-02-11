const getRandomNumbers = (arrLength, from, to) => {
    let result = [];

    for (let i = 0; i < arrLength; i++) {
        let isWrongRange = to < from,
            noNumbersBetween = (to - from < 1) && Math.ceil(to) === Math.ceil(from),
            rand = from + Math.random() * (to - from);

        if (isWrongRange || noNumbersBetween) {
            return null;
        }

        result.push(Math.floor(rand));
    }

    return result;
};
  
console.log(getRandomNumbers(10, 2.6, 9.3));