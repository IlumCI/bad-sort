import { defaultCompare, shuffleArray } from "../utils.js";

/**
 * Gaslight Sort - returns a sorted array and then randomly messes with your original array
 * "What do you mean it changed? It was always like that, you're goin crazy smh smh"
 */
export const gaslightSort = <T>(arr: T[], cmp?: (a: T, b: T) => number): T[] => {
	const compare = cmp || defaultCompare;
	const sorted = arr.toSorted(compare);
	const modOrigin = () => {
		const delay = Math.random() * 5000 + 1;
		setTimeout(() => {
			const mod = Math.random();
			if (mod < 0.33) {
				const shuff = shuffleArray([...arr]);
				arr.length = 0;
				arr.push(...shuff);
			} else if (mod < 0.66) {
				arr.reverse();
			} else {
				if (arr.length >= 2) {
					const i = Math.floor(Math.random() * arr.length);
					const j = Math.floor(Math.random() * arr.length);
					[arr[i], arr[j]] = [arr[j]!, arr[i]!];
				}
			}
			if (Math.random() > 0.1) modOrigin();
		}, delay);
	};
	modOrigin();
	return sorted;
};

