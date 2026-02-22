import { describe, it, expect } from "vitest";
import { solution } from "./solution.js";

describe("Strip Comments", () => {
  function runTest(text, markers, expected) {
    const title = `text = ${JSON.stringify(text)}, markers = ${JSON.stringify(markers)}`;
    it(title, () => {
      expect(solution(text, markers)).toBe(expected);
    });
  }

  const tests = [
    ["aa bb cc", [], "aa bb cc"],
    ["aa bb cc  ", [], "aa bb cc"],
    ["  aa bb cc", [], "  aa bb cc"],
    ["  aa # bb # cc  ", [], "  aa # bb # cc"],

    ["aa bb cc", ["#"], "aa bb cc"],
    ["aa bb # cc", ["#"], "aa bb"],
    ["aa# bb cc", ["#"], "aa"],
    ["aa #bb cc", ["#"], "aa"],
    ["aa # bb # cc", ["#"], "aa"],
    ["#aa bb cc", ["#"], ""],

    ["#aa bb\ncc dd", ["#"], "\ncc dd"],
    ["aa # bb\ncc dd", ["#"], "aa\ncc dd"],
    ["aa bb\n#cc dd", ["#"], "aa bb\n"],
    ["aa bb\ncc # dd", ["#"], "aa bb\ncc"],
    ["aa bb\ncc dd#", ["#"], "aa bb\ncc dd"],

    ["aa bb\ncc dd", ["#", "!"], "aa bb\ncc dd"],
    ["aa # bb\ncc dd", ["#", "!"], "aa\ncc dd"],
    ["aa bb\ncc ! dd", ["#", "!"], "aa bb\ncc"],
    ["#aa bb\n!cc dd", ["#", "!"], "\n"],
    ["aa ! bb\ncc # dd", ["#", "!"], "aa\ncc"],
    ["aa bb#\ncc dd!", ["#", "!"], "aa bb\ncc dd"],

    ["aa + bb\ncc - dd\nee * ff", ["+", "-", "*"], "aa\ncc\nee"],
    ["aa / bb\ncc ^ dd\nee $ ff", ["/", "^", "$"], "aa\ncc\nee"],
  ];

  for (const [text, markers, expected] of tests) {
    runTest(text, markers, expected);
  }
});
