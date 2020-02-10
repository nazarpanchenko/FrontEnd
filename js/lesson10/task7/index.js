const getRandomNumbers = (arrLength, min, max) => {
    if (min >= max) return null;

    let result = [];

    for (let i = 0; i < arrLength; i++) {
        let rand = Math.round(min + Math.random() * (max - min));
        result.push(rand);
    }

    return result;
};
  
console.log(getRandomNumbers(10, 3, 8));