export const defaultCompare = (a, b) => {
    if (a === b)
        return 0;
    return String(a) < String(b) ? -1 : 1;
};
export const isSorted = (arr, cmp) => {
    const compare = cmp || defaultCompare;
    const gt = (a, b) => compare(a, b) <= 0;
    return arr.every((v, i, a) => !i || gt(a[i - 1], v));
};
export const shuffleArray = (arr) => {
    return arr.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};
//# sourceMappingURL=utils.js.map