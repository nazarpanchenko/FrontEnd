const splitString = (str, len) => {
    if (typeof(str) !== 'string') return null;

    if (len == undefined) len = 10;

    let strArr = [],
        arrIndex = -4;

    while (true) {
        if (arrIndex > len) break;

        arrIndex += len;

        let chunk = str.substr(arrIndex, len);

        strArr.push(chunk);
    }

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length < len) strArr[i] += "...";
    }

    return strArr;
};


console.log(splitString('abcd efgh', 4));