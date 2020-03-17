import { calc } from './calculator';

it ('check if + operator working', () => {
    const result = ('2 + 2');

    expect(result).toEqual('4');
});

it ('check if - operator working', () => {
    const result = ('2 - 2');

    expect(result).toEqual('0');
});

it ('check if * operator working', () => {
    const result = ('2 * 2');

    expect(result).toEqual('4');
});

it ('check if / operator working', () => {
    const result = ('2 / 2');

    expect(result).toEqual('1');
});

it ('check if passed argument is a string', () => {
    const result = (1);

    expect(result).toEqual(null);
});