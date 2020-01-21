function checker(arr) {
    let min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);

    return (min + max) > 1000 ? true : false;
}

checker([3, 0, 9, 12, 53, 21, 16, 18]);