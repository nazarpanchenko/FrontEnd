const getMessagesForBestStudents = (allStudents, failedStudents) => {
    const passedStudents = allStudents
        .filter(name => !failedStudents.includes(name));

    return passedStudents
        .map(name => 'Good Job, ' + name);
};

console.log(getMessagesForBestStudents(['Mark', 'John', 'Dave'], ['Anthony', 'John', 'Mark']));