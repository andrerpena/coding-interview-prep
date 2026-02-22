import { describe, it, expect } from "vitest";
import { kPermutations } from "./solution.js";

describe("kPermutations", () => {
	it("should return single elements when k is 1", () => {
		const result = kPermutations(["a", "b", "c"], 1);
		expect(result).toEqual(["a", "b", "c"]);
	});

	it("should return all 2-permutations", () => {
		const result = kPermutations(["a", "b", "c"], 2);
		expect(result).toEqual(["ab", "ac", "ba", "bc", "ca", "cb"]);
	});

	it("should return all 3-permutations", () => {
		const result = kPermutations(["a", "b", "c"], 3);
		expect(result).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"]);
	});

	it("should return empty array when k is greater than array length", () => {
		const result = kPermutations(["a", "b"], 3);
		expect(result).toEqual([]);
	});

	it("should return array with empty string when k is 0", () => {
		const result = kPermutations(["a", "b", "c"], 0);
		expect(result).toEqual([""]);
	});

	it("should return empty array when input array is empty and k > 0", () => {
		const result = kPermutations([], 1);
		expect(result).toEqual([]);
	});

	it("should return array with empty string when input array is empty and k is 0", () => {
		const result = kPermutations([], 0);
		expect(result).toEqual([""]);
	});

	it("should work with multi-character strings", () => {
		const result = kPermutations(["ab", "cd"], 2);
		expect(result).toEqual(["abcd", "cdab"]);
	});

	it("should work with 4 elements", () => {
		const result = kPermutations(["a", "b", "c", "d"], 2);
		expect(result).toEqual([
			"ab", "ac", "ad",
			"ba", "bc", "bd",
			"ca", "cb", "cd",
			"da", "db", "dc"
		]);
	});
});
