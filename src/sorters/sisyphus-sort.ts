import { isSorted, shuffleArray } from "../utils.js";

export const sisyphusSort = <T>(arr: T[], cmp?: (a: T, b: T) => number): T[] => {
    let result: T[] = arr.slice();
    while(!isSorted(result)) {
        result.sort(cmp);
        result = shuffleArray(result);
    }
    return result;
};
