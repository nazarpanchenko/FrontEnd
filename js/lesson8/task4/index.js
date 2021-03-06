const getAdults = people => {
    let result = {};

    for (let person in people) {
        if (people[person] >= 18) result[person] = people[person];
    }

    return Object.keys(result).length == 0 ? {} : result;
};

const people = {
    'John Doe' : 19,
    'Tom' : 17,
    'Bob' : 18
};

getAdults(people);