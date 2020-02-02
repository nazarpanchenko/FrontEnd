const getCustomersList = (customers) => {
    let result = [];

    for (let customer in customers) {
        let customerCopy = {};

        customerCopy.name = customer.name;
        customerCopy.age = customer.age;
        result.push(customerCopy);
    }

    console.log(result);

    return result;
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

getCustomersList(customers);