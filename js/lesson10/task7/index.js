const getRandomNumbers = (arrLength, from, to) => {
    let result = [],
        isWrongRange = to < from,
        noNumbersBetween = (to - from < 1) && Math.ceil(to) === Math.ceil(from);

    if (isWrongRange || noNumbersBetween) {
        return null;
    }

    for (let i = 0; i < arrLength; i++) {
        let rand = Math.round(from - 0.5 + Math.random() * (to - from));

        result.push(rand);
    }

    return result;
};
  
console.log(getRandomNumbers(10, 2.6, 9.3));