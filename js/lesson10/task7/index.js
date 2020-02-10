const randomInteger = (arrLength, min, max) => {
    let result = [];

    for (let i = 0; i < arrLength; i++) {
        let rand = min + Math.random() * (max + 1 - min);
        result.push(Math.floor(rand));
    }

    return result;
};
  
console.log(randomInteger(10, 3, 8));