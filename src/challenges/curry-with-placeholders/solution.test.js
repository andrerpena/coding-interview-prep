import { describe, expect, it } from 'vitest'
import { curry } from './solution'

describe('curry with placeholders', () => {
  const _ = curry.placeholder

  it('should work with all arguments at once', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1, 2, 3)).toBe('1_2_3')
  })

  it('should work with one argument at a time', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1)(2)(3)).toBe('1_2_3')
  })

  it('should work with partial application', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1, 2)(3)).toBe('1_2_3')
    expect(curriedJoin(1)(2, 3)).toBe('1_2_3')
  })

  it('should work with a single placeholder', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(_, 2)(1, 3)).toBe('1_2_3')
  })

  it('should work with multiple placeholders', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(_, _, _)(1)(_, 3)(2)).toBe('1_2_3')
  })

  it('should work with placeholder in the middle', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1, _, 3)(2)).toBe('1_2_3')
  })

  it('should work with placeholder at the end', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(1, 2, _)(3)).toBe('1_2_3')
  })

  it('should work with all placeholders filled at once', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)

    expect(curriedJoin(_, _, _)(1, 2, 3)).toBe('1_2_3')
  })

  it('should work with complex placeholder patterns', () => {
    const join = (a, b, c, d) => `${a}_${b}_${c}_${d}`
    const curriedJoin = curry(join)

    expect(curriedJoin(_, 2, _, 4)(1, 3)).toBe('1_2_3_4')
    expect(curriedJoin(_, _, 3, _)(1, 2, 4)).toBe('1_2_3_4')
    expect(curriedJoin(1, _, _, 4)(2)(3)).toBe('1_2_3_4')
  })

  it('should allow reuse of partially applied functions with placeholders', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join)
    const joinWithPlaceholder = curriedJoin(_, 'middle', _)

    expect(joinWithPlaceholder('start', 'end')).toBe('start_middle_end')
    expect(joinWithPlaceholder('foo', 'bar')).toBe('foo_middle_bar')
  })

  it('should work with different functions', () => {
    const multiply = (a, b, c, d) => a * b * c * d
    const curriedMultiply = curry(multiply)

    expect(curriedMultiply(_, 3, _, 5)(2, 4)).toBe(120)
    expect(curriedMultiply(2, _, 4, _)(3, 5)).toBe(120)
  })
})
