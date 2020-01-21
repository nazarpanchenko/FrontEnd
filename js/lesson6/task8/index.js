function uniqueCount(array) {
    let newArr = [],
        result = 0;
  
    for (let number of array) {
      if (!newArr.includes(number)) {
        newArr.push(number);
        ++result;
      }
    }
  
    return result;
  }

uniqueCount([3, 1, 13, 9, 4, 31, 23, 2]);