import getSpecialNumbers from './index';

it ('should check if argument is a number', () => {
    const result = getSpecialNumbers('2 * 2');

    expect(result).toEqual(undefined);
});

it ('should check if argument is empty', () => {
    const result = getSpecialNumbers();

    expect(result).toEqual(undefined);
});

it ('should check if argument is an array', () => {
    const result = getSpecialNumbers([1, 2, 3, 4, 5]);

    expect(result).toEqual(undefined);
});