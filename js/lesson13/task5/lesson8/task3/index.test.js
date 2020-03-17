import pickProps from './index';

it ('should check if result is an object', () => {
    const result = pickProps({
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }, ['a', 'b', 'e']);

    expect(result).toEqual([1, 2, 3, 4]);
});

it ('should check if result is empty object', () => {
    const result = pickProps({});

    expect(result).toEqual(undefined);
});

it ('should check if  passed argument is an object', () => {
    const result = pickProps([1, 2, 3, 4]);

    expect(result).toEqual();
});