function removeDuplicates(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
    }
  
    for (let number of result) {
      if (result.includes(number)) {
        result.pop(number);
      }
    }
  
    return result;
  }

removeDuplicates([3, 1, 13, 9, 4, 31, 23, 2]);