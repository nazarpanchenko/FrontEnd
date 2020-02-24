const countOccurences = (str, target) => {
    if (!target) return null;

    let result = [],
        pos = 0;

    while (true) {
        let foundPos = str.indexOf(target, pos);

        result.push(foundPos);

        if (foundPos == -1) break;

        pos = foundPos + 1; 
    }

    return result.length;
};

console.log(countOccurences('Greetings', 'ing'));