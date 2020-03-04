const cleanTransactionsList = transactions => {
    let result = [],
        number;

    for (let i = 0; i < transactions.length; i++)    {
        number = transactions[i];
        
        if (isNaN(number)) continue;
         
        result.push('$' + (parseFloat(number).toFixed(2)));
    }

    return result;
};

const transactionsArray = [' 1.9 ', '16.4', ' 17 ', '1 dollar'];

console.log(cleanTransactionsList(transactionsArray));