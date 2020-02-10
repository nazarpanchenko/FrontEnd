const getRandomNumbers = (arrLength, min, max) => {
    if (min >= max) return null;

    let result = [];

    for (let i = 0; i < arrLength; i++) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        result.push(Math.floor(rand));
    }

    result.forEach(el => { 
        if (!Number.isInteger(el)) return null;
    });

    return result;
};
  
console.log(getRandomNumbers(10, 3, 8));