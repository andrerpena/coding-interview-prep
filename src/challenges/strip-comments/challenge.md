# Strip Comments

## Difficulty: Intermediate

## Problem

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

## Function Signature

```javascript
function solution(text, markers) {
  // Your code here
}
```

## Parameters

- `text` (string): The input text that may contain comments
- `markers` (array of strings): An array of comment marker characters

## Returns

- (string): The text with comments and trailing whitespace removed from each line

## Examples

### Example 1

```javascript
solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// Returns: "apples, pears\ngrapes\nbananas"
```

### Example 2

```javascript
solution("aa bb # cc", ["#"])
// Returns: "aa bb"
```

### Example 3

```javascript
solution("aa bb cc", [])
// Returns: "aa bb cc"
```

## Notes

- The markers array can be empty, in which case no stripping should occur (except trailing whitespace on each line)
- Multiple markers can be provided
- Each line should be processed independently
- Trailing whitespace should be removed from each line after stripping comments
- Leading whitespace should be preserved
