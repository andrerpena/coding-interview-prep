import { describe, it, expect } from 'vitest'
import { countBits } from './solution'

describe('countBits', () => {
  it('should return 0 for 0', () => {
    expect(countBits(0)).toBe(0)
  })

  it('should return 1 for 4 (100)', () => {
    expect(countBits(4)).toBe(1)
  })

  it('should return 3 for 7 (111)', () => {
    expect(countBits(7)).toBe(3)
  })

  it('should return 2 for 9 (1001)', () => {
    expect(countBits(9)).toBe(2)
  })

  it('should return 2 for 10 (1010)', () => {
    expect(countBits(10)).toBe(2)
  })

  it('should return 5 for 1234 (10011010010)', () => {
    expect(countBits(1234)).toBe(5)
  })
})
