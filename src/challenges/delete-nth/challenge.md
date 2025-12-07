# Delete Nth

## Description

Given a list and a number `n`, create a new list that contains each number of the original list at most `n` times, without reordering.

The goal is to filter out elements that would appear more than `n` times in the result, while preserving the original order of elements.

## Example

```javascript
deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)
// returns [1, 2, 3, 1, 2, 3]
// Explanation:
// - Take [1, 2, 3, 1, 2] (each appears at most 2 times so far)
// - Skip the next 1 (would be 3rd occurrence)
// - Skip the next 2 (would be 3rd occurrence)
// - Take 3 (only 2nd occurrence)
// Result: [1, 2, 3, 1, 2, 3]

deleteNth([20, 37, 20, 21], 1)
// returns [20, 37, 21]
// Explanation: Each number can appear only once
// - Take 20 (1st occurrence)
// - Take 37 (1st occurrence)
// - Skip 20 (would be 2nd occurrence)
// - Take 21 (1st occurrence)
```

## Requirements

- Return a new array with each element appearing at most `n` times
- Preserve the original order of elements
- Do not modify the input array
- `n` will always be a positive integer

## Function Signature

```typescript
function deleteNth(arr: number[], n: number): number[]
```
