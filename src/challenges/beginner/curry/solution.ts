type Func = (...args: any[]) => any

export function curry(fn: Func): any {
  const expectedArgsCount = fn.length
  let accumulatedArgs: any[] = []
  const curried = (...args: any[]) => {
    for (const arg of args) {
      accumulatedArgs.push(arg)
    }
    if (accumulatedArgs.length === expectedArgsCount) {
      const accumulatedArgsCopy = [...accumulatedArgs]
      accumulatedArgs = []
      return fn(...accumulatedArgsCopy)
    }
    return curried
  }
  return curried
}
