const getRandomNumbers = (arrLength, min, max) => {
    if (min >= max) return null;

    let result = [];

    for (let i = 0; i < arrLength; i++) {
        let rand = min + Math.random() * (max + 1 - min);

        result.push(rand);
    }

    return result;
};
  
console.log(getRandomNumbers(10, 5.5, 5.9));