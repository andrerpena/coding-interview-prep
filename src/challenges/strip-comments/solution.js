export function solution(text, markers) {
  return text
    .split('\n')
    .map((str) => {
      return markers
        .reduce((acc, curr) => {
          return acc.split(curr)[0]
        }, str)
        .trimEnd()
    })
    .join('\n')
}
