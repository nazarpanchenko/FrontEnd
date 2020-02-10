const getRandomNumbers = (arrLength, min, max) => {
    if (min >= max) return null;

    let result = [];

    for (let i = 0; i < arrLength; i++) {
        let rand = min + Math.random() * (max + 1 - min);
        result.push(Math.floor(rand));
    }

    return result;
};
  
console.log(getRandomNumbers(10, 3, 8));