const splitText = (text, length) => {
    if (typeof(text) != 'string') return null;

    if (length == null) length = 10;

    const strArr = [];
    let startPos = 0;

    while (true) {
        let chunk = text.slice(startPos, length);

        if (chunk.length === 0) break;

        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPos += length;
    }

    return strArr.join('\n');
};

splitText('abcdefgs', 4);