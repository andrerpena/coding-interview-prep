import { describe, expect, it } from 'vitest'
import { deleteNth } from './solution'

describe('deleteNth', () => {
  it('should limit occurrences to 2', () => {
    expect(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)).toEqual([1, 2, 3, 1, 2, 3])
  })

  it('should limit occurrences to 1', () => {
    expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21])
  })

  it('should return empty array for empty input', () => {
    expect(deleteNth([], 1)).toEqual([])
  })

  it('should return all elements when n is larger than any occurrence count', () => {
    expect(deleteNth([1, 2, 3], 5)).toEqual([1, 2, 3])
  })

  it('should handle single element repeated many times', () => {
    expect(deleteNth([1, 1, 1, 1, 1], 2)).toEqual([1, 1])
  })

  it('should handle n = 3', () => {
    expect(deleteNth([1, 1, 1, 1], 3)).toEqual([1, 1, 1])
  })

  it('should preserve order of first occurrences', () => {
    expect(deleteNth([5, 5, 5, 4, 4, 4, 3, 3, 3], 2)).toEqual([
      5, 5, 4, 4, 3, 3,
    ])
  })

  it('should handle alternating elements', () => {
    expect(deleteNth([1, 2, 1, 2, 1, 2], 2)).toEqual([1, 2, 1, 2])
  })

  it('should handle negative numbers', () => {
    expect(deleteNth([-1, -1, -1, -2, -2], 1)).toEqual([-1, -2])
  })

  it('should handle mixed positive and negative numbers', () => {
    expect(deleteNth([1, -1, 1, -1, 1, -1], 2)).toEqual([1, -1, 1, -1])
  })
})
