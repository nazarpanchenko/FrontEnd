const getMessagesForBestStudents = (allStudents, failedStudents) => {
    const passedStudents = allStudents
        .filter(name => !failedStudents.includes(name));

    return passedStudents
        .map(name => 'Good job, ' + name);
};

console.log(getMessagesForBestStudents(['Mark', 'Anthony',  'John', 'Dave'], ['John', 'Mark']));