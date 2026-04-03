import { describe, expect, it } from 'vitest'
import { rgb } from './solution'

describe('rgb', () => {
  it('should return 000000 for (0, 0, 0)', () => {
    expect(rgb(0, 0, 0)).toBe('000000')
  })

  it('should return FFFFFF for (255, 255, 255)', () => {
    expect(rgb(255, 255, 255)).toBe('FFFFFF')
  })

  it('should return 9400D3 for (148, 0, 211)', () => {
    expect(rgb(148, 0, 211)).toBe('9400D3')
  })

  it('should handle values greater than 255 by clamping to 255', () => {
    expect(rgb(255, 255, 300)).toBe('FFFFFF')
  })

  it('should pad single digit hex values with a leading zero', () => {
    expect(rgb(0, 0, 1)).toBe('000001')
    expect(rgb(1, 2, 3)).toBe('010203')
  })
})
