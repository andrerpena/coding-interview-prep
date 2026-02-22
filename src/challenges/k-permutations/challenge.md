# K-Permutations

## Difficulty: Intermediate

## Problem

Given an array of strings and a number `k`, return all possible permutations of length `k` from the array elements.

A permutation is an ordered arrangement where the order matters. For example, `['a', 'b']` and `['b', 'a']` are different permutations.

## Examples

```javascript
kPermutations(['a', 'b', 'c'], 1)
// Returns: ['a', 'b', 'c']

kPermutations(['a', 'b', 'c'], 2)
// Returns: ['ab', 'ac', 'ba', 'bc', 'ca', 'cb']

kPermutations(['a', 'b', 'c'], 3)
// Returns: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

kPermutations(['a', 'b'], 3)
// Returns: [] (k is greater than array length)

kPermutations(['a', 'b', 'c'], 0)
// Returns: [''] (one empty string permutation)
```

## Constraints

- The input array contains unique strings
- `k` is a non-negative integer
- If `k > array.length`, return an empty array
- If `k === 0`, return an array containing one empty string `['']`

## Function Signature

```javascript
function kPermutations(arr, k) {
  // Your implementation here
}
```

## Hints

1. Think about how you can use recursion to build permutations
2. For each element, you can choose to include it and then find permutations of the remaining elements
3. Consider using backtracking to explore all possibilities
