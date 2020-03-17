import concatProps from './index';

it ('should check if passed object is empty', () => {
    const result = concatProps({});

    expect(result).toEqual([]);
});

it ('should check if argument is not a object', () => {
    const result = concatProps('');

    expect(result).toEqual(undefined);
});

it ('should check if passed argument is an object', () => {
    const result = concatProps({
        name: 'Tom',
        key: 17
    });

    expect(result).toEqual(['Tom', 17]);
});