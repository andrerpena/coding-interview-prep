export function countBits(n) {
  let count = 0
  let num = n
  while (num > 0) {
    count += num & 1
    num = num >>> 1
  }
  return count
}
