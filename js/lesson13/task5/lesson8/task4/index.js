export default (people) => {
    let result = {};

    for (let person in people) {
        if (people[person] >= 18) result[person] = people[person];
    }

    return Object.keys(result).length == 0 ? {} : result;
};
