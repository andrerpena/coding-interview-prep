import { describe, expect, it } from 'vitest'
import { curry } from './solution'

describe('curry', () => {
  // it('custom', () => {
  //   const curried()
  // })
  it('should work with all arguments at once', () => {
    const join = (a: number, b: number, c: number) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1, 2, 3)).toBe('1_2_3')
  })

  it('should work with one argument at a time', () => {
    const join = (a: number, b: number, c: number) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1)(2)(3)).toBe('1_2_3')
  })

  it('should work with partial application - first two args', () => {
    const join = (a: number, b: number, c: number) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1, 2)(3)).toBe('1_2_3')
  })

  it('should work with partial application - first arg only', () => {
    const join = (a: number, b: number, c: number) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1)(2, 3)).toBe('1_2_3')
  })

  it('should work with different functions', () => {
    const multiply = (a: number, b: number, c: number, d: number) =>
      a * b * c * d
    const curriedMultiply = curry(multiply)

    expect(curriedMultiply(2)(3)(4)(5)).toBe(120)
    expect(curriedMultiply(2, 3)(4, 5)).toBe(120)
    expect(curriedMultiply(2)(3, 4, 5)).toBe(120)
  })

  it('should work with single argument functions', () => {
    const identity = (x: number) => x
    const curriedIdentity = curry(identity)

    expect(curriedIdentity(42)).toBe(42)
  })

  it('should work with two argument functions', () => {
    const add = (a: number, b: number) => a + b
    const curriedAdd = curry(add)

    expect(curriedAdd(5)(10)).toBe(15)
    expect(curriedAdd(5, 10)).toBe(15)
  })

  it('should allow reuse of partially applied functions', () => {
    const join = (a: string, b: string, c: string) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)
    const joinWithHello = curriedJoin('hello')

    expect(joinWithHello('world', 'test')).toBe('hello_world_test')
    expect(joinWithHello('foo', 'bar')).toBe('hello_foo_bar')
  })
})
