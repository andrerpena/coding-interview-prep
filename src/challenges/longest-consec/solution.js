/**
 * Returns the first longest string consisting of k consecutive strings from the array.
 *
 * @param {string[]} strarr - Array of strings
 * @param {number} k - Number of consecutive strings to concatenate
 * @returns {string} - The longest concatenation of k consecutive strings
 */
export function longestConsec(strarr, k) {
  if (k > strarr.length) return ''
  let longest = ''
  for (let i = 0; i < strarr.length; i++) {
    let result = ''
    for (let j = 0; j < k && i + j < strarr.length; j++) {
      const str = strarr[i + j]
      result += str
    }
    if (result.length > longest.length) {
      longest = result
    }
  }
  return longest
}

// a, b, c
// 1 item
// a
// b
// c
// 2 items
// ab
// ac
// ba
// bc
// ca
// cb
// 3 items
// abc
// acb
// bac
// bca
// cab
// cba

// a, [b, c]
