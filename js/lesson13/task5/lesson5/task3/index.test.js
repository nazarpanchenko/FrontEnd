import getSquaredNumber from './index';

it ('should check if argument is a number', () => {
    const result = getSquaredNumber('2 * 2');

    expect(result).toEqual(undefined);
});

it ('should check if argument is empty', () => {
    const result = getSquaredNumber();

    expect(result).toEqual(undefined);
});

it ('should check if argument is an array', () => {
    const result = getSquaredNumber([1, 2, 3, 4, 5]);

    expect(result).toEqual(undefined);
});