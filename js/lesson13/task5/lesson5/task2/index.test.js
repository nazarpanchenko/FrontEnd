import evenOdd from './index';

it ('should check if passed argument is a number', () => {
    const result = evenOdd('8');

    expect(result).toEqual(undefined);
});

it ('should check if passed argument is empty', () => {
    const result = evenOdd();

    expect(result).toEqual(undefined);
});

it ('should check if passed argument is an array', () => {
    const result = evenOdd([8, 10, 12, 16]);

    expect(result).toEqual(undefined);
});