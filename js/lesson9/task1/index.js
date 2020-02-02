const getAdults = people => {
    let result = [];

    for (let person of people) {
        if (people[person] >= 18) result.push(person);
    }

    return Object.keys(people).length == 0 ? {} : people;
};

const people = {
    'John Doe' : 19,
    'Tom' : 17,
    'Bob' : 18
};

getAdults(people);