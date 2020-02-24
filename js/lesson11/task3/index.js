const splitString = (str, len) => {
    if (typeof(str) !== 'string') return null;

    if (!len) len = 10;

    let strArr = [],
        currentPos = -1,
        nextPos = -len;

    while (true) {
        if ((nextPos + len) > str.length) break;

        ++currentPos;
        nextPos += len;

        let chunk = str.substr(nextPos, len);

        strArr.push(chunk);
    }

    while (strArr[strArr.length - 1].length < len) {
        strArr[strArr.length - 1] += ".";
    }

    return strArr;
};

console.log(splitString('abcd efgh', 4));