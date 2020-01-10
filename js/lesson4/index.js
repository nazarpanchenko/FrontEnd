for (let i = 1; i <= 5; i++) {
    let result;

    console.log('=> ' + i + ' <=');

    for (let j = 1; j <= 5; j++) {
        result = (i * j);
        console.log(i + ' x ' + j + ' = ' + result);
    }
}