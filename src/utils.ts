export const defaultCompare = <T>(a: T, b: T): number => {
    if (a === b) return 0;
    return String(a) < String(b) ? -1 : 1;
};

export const isSorted = <T>(arr: T[], cmp?: (a: T, b: T) => number) => {
    const compare = cmp || defaultCompare;
    const gt = (a: T, b: T) => compare(a, b) <= 0;
    return arr.every((v, i, a) => !i || gt(a[i - 1]!, v))
};

export const shuffleArray = <T>(arr: T[]): T[] => {
    return arr.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}
