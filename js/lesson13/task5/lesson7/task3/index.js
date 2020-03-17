export default (arr) => {
    const copy = [...arr];

    return copy.reduce(function(acc, num) {
        return acc.concat(num);
    }, []);
};
