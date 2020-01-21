function uniqueSum(arr) {
    let result = [];
  
    for (let num of arr) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
  
    return result;
  }

uniqueSum([3, 1, 13, 9, 4, 31, 23, 2]);