/**
 * Redistribute values equally among each array index
 * @param arr Array to sort
 * @returns Redistributed array
 */
export const marxSort = (arr) => {
    const everythingWeHave = arr.reduce((acc, cur) => acc + cur, 0);
    const whatEachOneGets = everythingWeHave / arr.length;
    return Array(arr.length).fill(whatEachOneGets);
};
//# sourceMappingURL=marx-sort.js.map