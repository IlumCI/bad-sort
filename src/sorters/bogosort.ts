import { isSorted, shuffleArray } from "../utils.js";

/**
 * Sort an array using the bogosort algorithm
 * Complexity: O(rng)
 * Randomly shuffles the array until it is sorted
 * @param arr Array to sort
 * @param cmp Optional compare function (Array#sort)
 * @returns Sorted array
 */
export const bogosort = <T>(arr: T[], cmp?: (a: T, b: T) => number): T[] => {
    let result = arr;

    while (!isSorted(result, cmp)) {
        // Shuffle
        result = shuffleArray(result);
    }

    return result;
}
