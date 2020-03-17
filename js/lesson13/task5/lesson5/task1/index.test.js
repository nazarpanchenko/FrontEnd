import getSum from './index';

it ('should get sum of two numbers', () => {
    const result = getSum(8, 4);

    expect(result).toEqual(4);
});

it ('should check if there are 2 arguments passed', () => {
    const result = getSum(8);

    expect(result).toEqual(undefined);
});

it ('should check if there are no arguments passed', () => {
    const result = getSum();

    expect(result).toEqual(undefined);
});
