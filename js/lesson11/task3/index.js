const splitString = (str, length) => {
    if (typeof(str) != 'string') return null;

    if (length == undefined) let length = 10;

    let strArr = [];
    let startPos = 0;

    while (true) {
        let chunk = str.substr(startPos, length);

        if (chunk.length === 0) break;

        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPos += length;
    }

    return strArr;
};


splitString('abcd efgh', 4);