/**
 * The returned array is both sorted and not sorted until inspected
 */
export const schrodingerSort = <T>(arr: T[], cmp?: (a: T, b: T) => number): T[] => {
    if (Math.random() > 0.5) {
        return arr.toSorted(cmp);
    } else {
        return arr;
    }
};
