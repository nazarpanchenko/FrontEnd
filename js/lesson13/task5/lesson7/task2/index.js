export default (arr) => {
    const copy = [...arr];

    copy.sort(function(a, b) {
        return b - a;
    });

    return copy;
};