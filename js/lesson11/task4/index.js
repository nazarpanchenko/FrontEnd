const countOccurrences = (str, target) => {
    if (!target) return null;

    let result = [],
        pos = 0;

    while (true) {
        let foundPos = str.indexOf(target, pos);

        if (foundPos == -1) break;

        result.push(foundPos);
        pos = foundPos + 1; 
    }

    return result.length;
};

console.log(countOccurrences('Greetings', 'ing'));