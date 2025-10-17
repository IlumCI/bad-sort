import { isSorted } from "../utils.js";

/**
 * Sorts an array using a miracle
 * Complexity: O(infinity)
 */
export const miracleSort = <T>(arr: T[], cmp: (a: T, b: T) => number): T[] => {
    while(!isSorted(arr, cmp)) {
        // Waiting for a miracle
    }
    return arr;
};
