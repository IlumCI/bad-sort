/**
 * Sorts an array of numbers using Sleep Sort
 * Complexity: O(max(arr))
 * @param arr Array to sort
 */
export const sleepSort = async (arr) => {
    let result = [];
    await Promise.all(arr.map(async (n) => {
        await new Promise(res => setTimeout(res, n));
        result.push(n);
    }));
    return result;
};
//# sourceMappingURL=sleep-sort.js.map