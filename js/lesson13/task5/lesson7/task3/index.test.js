import flatArray from './index';

it ('should check if array is empty', () => {
    const result = flatArray([]);

    expect(result).toEqual(undefined);
});

it ('should check if passed argument is a string', () => {
    const result = flatArray('');

    expect(result).toEqual(undefined);
});

it ('should check if any argument is passed', () => {
    const result = flatArray();

    expect(result).toEqual(undefined);
});