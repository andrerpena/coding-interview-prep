import { describe, it, expect } from "vitest";
import { longestConsec } from "./solution";

describe("longestConsec", () => {
	it("should return the longest consecutive string", () => {
		expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toBe("abigailtheta");
	});

	it("should work with k = 1", () => {
		expect(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)).toBe("oocccffuucccjjjkkkjyyyeehh");
	});

	it("should return empty string for empty array", () => {
		expect(longestConsec([], 3)).toBe("");
	});

	it("should handle longer strings", () => {
		expect(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)).toBe("wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
	});

	it("should return first longest when there are ties", () => {
		expect(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)).toBe("wlwsasphmxxowiaxujylentrklctozmymu");
	});

	it("should return empty string for negative k", () => {
		expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)).toBe("");
	});

	it("should work with k = 3", () => {
		expect(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)).toBe("ixoyx3452zzzzzzzzzzzz");
	});

	it("should return empty string when k > array length", () => {
		expect(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)).toBe("");
	});

	it("should return empty string when k = 0", () => {
		expect(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)).toBe("");
	});
});
