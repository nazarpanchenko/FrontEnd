const splitString = (str, len) => {
    if (typeof(str) != 'string') return null;

    if (!len) len = 10;

    let strArr = [],
        startPos = 0;

    while (true) {
        let chunk = str.substr(startPos, len);

        if (startPos == len) break;

        strArr.push(chunk);
        startPos += 1;
    }

    return strArr;
};


splitString('abcd efgh', 4);