function removeDuplicates(array) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(number);
      } else {
          result.splice(i, 1);
      }
    }
  
    return result;
  }

removeDuplicates([3, 1, 13, 9, 4, 31, 23, 2]);