const user = {
    'John Doe' : 19,
    'Tom' : 17,
    'Bob' : 18
};

const getAdults = usersObj => result = Object.entries(people)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

console.log(getAdults(usersObj));