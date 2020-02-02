const getCustomersList = customers => {
    let result = [];

    for (let customer in customers) {
        result.push(Object.assign({id : customer}, customers[customer]));
    }

    return result.sort((a, b) => a.age > b.age ? 1 : -1);
};

const customers = {
    'customer-id-1' : {
        name : 'William',
        age : 54
    },
    'customer-id-2' : {
        name : 'Tom',
        age : 17
    }
};

console.log(getCustomersList(customers));