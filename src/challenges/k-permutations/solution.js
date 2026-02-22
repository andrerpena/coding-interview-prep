/**
 * Returns all permutations of length k from the given array as concatenated strings
 * @param {string[]} arr - Array of unique strings
 * @param {number} k - Length of each permutation
 * @returns {string[]} - Array of all k-length permutations as strings
 */
export function kPermutations(arr, k) {
  if (k === 0) return ['']
  if (k > arr.length) return []

  let result = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const rest = arr.toSpliced(i, 1)

    const childPerms = kPermutations(rest, k - 1)

    result = [...result, ...childPerms.map((p) => `${item}${p}`)]
  }

  return result
}
// a, [b, c]
