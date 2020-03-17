import getMinSquaredNum from './getMinSquaredNumber';

it ('check if array is empty', () => {
    const result = getMinSquaredNum([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(null);
});

it ('check if passed argument is a string', () => {
    const result = getMinSquaredNum([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(null);
});

it ('should get minimal squared number', () => {
    const result = getMinSquaredNum([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(4);
});