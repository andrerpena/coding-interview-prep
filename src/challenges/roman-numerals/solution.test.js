import { describe, expect, it } from 'vitest'
import { RomanNumerals } from './solution'

describe('RomanNumerals', () => {
  describe('toRoman', () => {
    it('should convert 1 to I', () => {
      expect(RomanNumerals.toRoman(1)).toBe('I')
    })

    it('should convert 4 to IV (subtractive notation)', () => {
      expect(RomanNumerals.toRoman(4)).toBe('IV')
    })

    it('should convert 9 to IX (subtractive notation)', () => {
      expect(RomanNumerals.toRoman(9)).toBe('IX')
    })

    it('should convert 14 to XIV', () => {
      expect(RomanNumerals.toRoman(14)).toBe('XIV')
    })

    it('should convert 86 to LXXXVI', () => {
      expect(RomanNumerals.toRoman(86)).toBe('LXXXVI')
    })

    it('should convert 399 to CCCXCIX', () => {
      expect(RomanNumerals.toRoman(399)).toBe('CCCXCIX')
    })

    it('should convert 1000 to M', () => {
      expect(RomanNumerals.toRoman(1000)).toBe('M')
    })

    it('should convert 1666 to MDCLXVI (all symbols descending)', () => {
      expect(RomanNumerals.toRoman(1666)).toBe('MDCLXVI')
    })

    it('should convert 1990 to MCMXC', () => {
      expect(RomanNumerals.toRoman(1990)).toBe('MCMXC')
    })

    it('should convert 2008 to MMVIII', () => {
      expect(RomanNumerals.toRoman(2008)).toBe('MMVIII')
    })

    it('should convert 3999 to MMMCMXCIX (upper boundary)', () => {
      expect(RomanNumerals.toRoman(3999)).toBe('MMMCMXCIX')
    })
  })

  describe('fromRoman', () => {
    it('should convert I to 1', () => {
      expect(RomanNumerals.fromRoman('I')).toBe(1)
    })

    it('should convert IV to 4 (subtractive notation)', () => {
      expect(RomanNumerals.fromRoman('IV')).toBe(4)
    })

    it('should convert IX to 9 (subtractive notation)', () => {
      expect(RomanNumerals.fromRoman('IX')).toBe(9)
    })

    it('should convert XIV to 14', () => {
      expect(RomanNumerals.fromRoman('XIV')).toBe(14)
    })

    it('should convert LXXXVI to 86', () => {
      expect(RomanNumerals.fromRoman('LXXXVI')).toBe(86)
    })

    it('should convert CCCXCIX to 399', () => {
      expect(RomanNumerals.fromRoman('CCCXCIX')).toBe(399)
    })

    it('should convert M to 1000', () => {
      expect(RomanNumerals.fromRoman('M')).toBe(1000)
    })

    it('should convert MDCLXVI to 1666', () => {
      expect(RomanNumerals.fromRoman('MDCLXVI')).toBe(1666)
    })

    it('should convert MCMXC to 1990', () => {
      expect(RomanNumerals.fromRoman('MCMXC')).toBe(1990)
    })

    it('should convert MMVIII to 2008', () => {
      expect(RomanNumerals.fromRoman('MMVIII')).toBe(2008)
    })

    it('should convert MMMCMXCIX to 3999 (upper boundary)', () => {
      expect(RomanNumerals.fromRoman('MMMCMXCIX')).toBe(3999)
    })
  })

  describe('roundtrip', () => {
    it('should convert to roman and back for various values', () => {
      const values = [1, 42, 100, 444, 500, 944, 1234, 2022, 3999]
      for (const n of values) {
        expect(RomanNumerals.fromRoman(RomanNumerals.toRoman(n))).toBe(n)
      }
    })
  })
})
