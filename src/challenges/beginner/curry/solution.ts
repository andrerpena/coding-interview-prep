type Func = (...args: any[]) => any

export function curry(fn: Func): Func {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn(...args)
    }

    return (...nextArgs: any[]) => curried(...args.concat(nextArgs))
  }
}
