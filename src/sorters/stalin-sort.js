import { defaultCompare } from "../utils.js";
/**
 * Sorts an array using Stalin Sort Algorithm
 * Complexity: O(n)
 * Deletes any values that aren't in the correct order.
 * @param arr Array to sort
 * @param cmp Optional compare function (same in Array#sort)
 */
export const stalinSort = (arr, cmp) => {
    const compare = cmp || defaultCompare;
    const result = [];
    if (!Array.isArray(arr) || arr.length === 0)
        return result;
    let last = arr[0];
    result.push(last);
    for (let i = 1; i < arr.length; i++) {
        const cur = arr[i];
        if (compare(cur, last) >= 0) {
            result.push(cur);
            last = cur;
        }
    }
    return result;
};
//# sourceMappingURL=stalin-sort.js.map