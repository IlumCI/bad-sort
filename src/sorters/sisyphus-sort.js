import { isSorted, shuffleArray } from "../utils.js";
export const sisyphusSort = (arr, cmp) => {
    let result = arr.slice();
    while (!isSorted(result)) {
        result.sort(cmp);
        result = shuffleArray(result);
    }
    return result;
};
//# sourceMappingURL=sisyphus-sort.js.map