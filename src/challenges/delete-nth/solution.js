export function deleteNth(arr, n) {
  const cache = {}
  return arr.filter((item) => {
    cache[item] = (cache[item] || 0) + 1
    return cache[item] <= n
  })
}
