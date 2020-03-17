export default (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    const result = 0,
        tmp = 0;

    for (let i = 0; i < arr.length; i++) {
        tmp = arr[i] * arr[i];

        if (tmp < (arr[i + 1] * arr[i + 1])) {
            result = arr[i + 1];
        } else {
            result = tmp;
        }
    }

    return result;
};