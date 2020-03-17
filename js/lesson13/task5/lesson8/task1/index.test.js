import transformToObject from './index';

it ('should check if object is empty', () => {
    const result = transformToObject([]);

    expect(result).toEqual(undefined);
});

it ('should check if type of argument is array', () => {
    const result = transformToObject(1, 2, 3, 4, 5);

    expect(result).toEqual(undefined);
});

it ('should check if array length is bigger than one', () => {
    const result = transformToObject([1, 2]);

    expect(result).toEqual({'1' : 1, '2' : 2});
});