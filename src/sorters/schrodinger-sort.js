/**
 * The returned array is both sorted and not sorted until inspected
 */
export const schrodingerSort = (arr, cmp) => {
    if (Math.random() > 0.5) {
        return arr.toSorted(cmp);
    }
    else {
        return arr;
    }
};
//# sourceMappingURL=schrodinger-sort.js.map