import getAdults from './index';

it ('should check if passed argument is an object', () => {
    const result = getAdults(['John Doe', 'Tom', 'Bob']);

    expect(result).toEqual(undefined);
});

it ('should check if result object is empty', () => {
    const result = getAdults({});

    expect(result).toEqual({});
});

it ('should check the proper result', () => {
    const result = getAdults({
        'John Doe' : 19,
        'Tom' : 17,
        'Bob' : 18
    });

    expect(result).toEqual(['John Doe', 'Bob']);
});