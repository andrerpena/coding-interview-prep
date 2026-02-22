# Longest Consecutive String

## Difficulty: Beginner/Intermediate

## Problem

You are given an array of strings `strarr` and an integer `k`. Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

## Examples

```javascript
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
```

Concatenate the consecutive strings of `strarr` by 2:

| Concatenation | Length | Indices |
|---------------|--------|---------|
| "treefoling" | 10 | strarr[0] + strarr[1] |
| "folingtrashy" | 12 | strarr[1] + strarr[2] |
| "trashyblue" | 10 | strarr[2] + strarr[3] |
| "blueabcdef" | 10 | strarr[3] + strarr[4] |
| "abcdefuvwxyz" | 12 | strarr[4] + strarr[5] |

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first one is "folingtrashy", so that's what we return.

```javascript
longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
// returns "folingtrashy"

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// returns "abigailtheta"
```

## Edge Cases

Given `n` as the length of the string array:
- If `n = 0`, return `""`
- If `k > n`, return `""`
- If `k <= 0`, return `""`

## Note

**Consecutive strings**: strings that follow one after another without an interruption.

## Function Signature

```javascript
function longestConsec(strarr, k) {
    // your code
}
```

## Constraints

- Return the **first** longest string if there are ties
- `k` consecutive means exactly `k` strings in a row from the array
