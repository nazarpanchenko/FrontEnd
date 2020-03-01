const cleanTransactionsList = transactions => {
    let result = [],
        str;

    for (let i = 0; i < transactions.length; i++)    {
        str = transactions[i];
        str = str.trim();

        if (isNaN(+str)) str = str.charAt(0) + str.slice(1);

        result.push('$' + (+str).toFixed(2));
    }

    return result;
};

const transactionsArray = [' 1.9 ', '16.4', ' 17 ', '1 dollar'];

console.log(cleanTransactionsList(transactionsArray));