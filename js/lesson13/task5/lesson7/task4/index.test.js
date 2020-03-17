import getMessagesForBestStudents from './index';

it ('should check if passed argument is empty', () => {
    const result = getMessagesForBestStudents();

    expect(result).toEqual(undefined);
});

it ('should check if passed argument is not an array', () => {
    const result = getMessagesForBestStudents(10, 20);

    expect(result).toEqual(undefined);
});

it ('should check if array elements type is String', () => {
    const result = getMessagesForBestStudents([10, 20, 30]);

    expect(result).toEqual(undefined);
});