export function deleteNth(arr, n) {
  const map = {}
  const finalArray = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (!map[item]) {
      map[item] = 1
      finalArray.push(item)
    } else {
      if (map[item] >= n) {
      } else {
        map[item]++
        finalArray.push(item)
      }
    }
  }
  return finalArray
}
