export default (allStudents, failedStudents) => {
    const passedStudents = allStudents
        .filter(name => !failedStudents.includes(name));

    return passedStudents
        .map(name => 'Good job, ' + name);
};
