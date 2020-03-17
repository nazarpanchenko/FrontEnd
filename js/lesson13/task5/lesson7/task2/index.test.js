import sortDesc from './index';

it ('should check if array is empty', () => {
    const result = sortDesc([]);

    expect(result).toEqual(undefined);
});

it ('should check if passed argument is a string', () => {
    const result = sortDesc('');

    expect(result).toEqual(undefined);
});

it ('should check if any argument is passed', () => {
    const result = sortDesc();

    expect(result).toEqual(undefined);
});