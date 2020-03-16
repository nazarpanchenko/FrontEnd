import {getSquaredNumbers, getOddNumbers} from './calculator.js';

it ('should get square numbers', () => {
    const result = getSquaredNumbers([1, 2, 3]);

    expect(result).toEqual([1, 4, 9]);
});