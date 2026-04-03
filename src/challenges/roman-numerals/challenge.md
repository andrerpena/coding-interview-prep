# Roman Numerals

## Difficulty: Intermediate

## Problem

Write a `RomanNumerals` class with two static methods that convert between integers and Roman numeral strings:

- `toRoman(num)` — converts an integer to its Roman numeral representation.
- `fromRoman(str)` — converts a Roman numeral string back to an integer.

Modern Roman numerals are written by expressing each digit separately, starting with the leftmost digit and skipping any digit with a value of zero. Subtractive notation is used for 4s and 9s (e.g. `IV` for 4, `IX` for 9, `XL` for 40, `XC` for 90, `CD` for 400, `CM` for 900).

Input range: `1 <= n < 4000`

### Symbol Table

| Symbol | Value |
|--------|-------|
| M      | 1000  |
| CM     |  900  |
| D      |  500  |
| CD     |  400  |
| C      |  100  |
| XC     |   90  |
| L      |   50  |
| XL     |   40  |
| X      |   10  |
| IX     |    9  |
| V      |    5  |
| IV     |    4  |
| I      |    1  |

## Examples

```js
// toRoman
RomanNumerals.toRoman(2000); // "MM"
RomanNumerals.toRoman(1666); // "MDCLXVI"
RomanNumerals.toRoman(86);   // "LXXXVI"
RomanNumerals.toRoman(1);    // "I"

// fromRoman
RomanNumerals.fromRoman("MM");      // 2000
RomanNumerals.fromRoman("MDCLXVI"); // 1666
RomanNumerals.fromRoman("LXXXVI");  // 86
RomanNumerals.fromRoman("I");       // 1
```

## Constraints

- Input for `toRoman` is an integer in the range `[1, 3999]`.
- Input for `fromRoman` is a valid Roman numeral string.
- Use subtractive notation: 4 is `IV`, not `IIII`.
- The class should be exported as a named export.

## Function Signature

```js
export class RomanNumerals {
  static toRoman(num) {}
  static fromRoman(str) {}
}
```
