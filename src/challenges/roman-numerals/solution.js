/**
 * A class with static methods to convert between integers and Roman numeral strings.
 *
 * @example
 * RomanNumerals.toRoman(1990);       // "MCMXC"
 * RomanNumerals.fromRoman("MCMXC");  // 1990
 */
export class RomanNumerals {
  /**
   * Converts an integer to its Roman numeral representation.
   * @param {number} num - An integer in the range [1, 3999].
   * @returns {string} The Roman numeral string.
   */
  static toRoman(num) {
    let result = ''
    let tempNum = num
    const tuples = Object.keys(romanToDecimal)
      .map((k) => {
        return [k, romanToDecimal[k]]
      })
      .reverse()
    for (const tuple of tuples) {
      if (tempNum >= tuple[1]) {
        const quotient = Math.floor(tempNum / tuple[1])
        const remainder = tempNum % tuple[1]

        // I will add quotient to the result, quotient times
        for (let i = 0; i < quotient; i++) {
          result += tuple[0]
        }

        tempNum = remainder
      }
    }

    // Now, we need to do pattern replacements
    return Object.keys(replacementPatterns)
      .map((p) => [p, replacementPatterns[p]])
      .reduce((resultProcessed, pattern) => {
        return resultProcessed.replaceAll(pattern[0], pattern[1])
      }, result)
  }

  /**
   * Converts a Roman numeral string to an integer.
   * @param {string} str - A valid Roman numeral string.
   * @returns {number} The integer value.
   */
  static fromRoman(str) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      const charNum = romanToDecimal[char]
      const nextChar = str[i + 1]
      const nextCharNum = nextChar ? romanToDecimal[nextChar] : undefined

      if (nextCharNum && charNum < nextCharNum) {
        result += nextCharNum - charNum
        i++
      } else {
        result += charNum
      }
    }
    return result
  }
}

const romanToDecimal = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const replacementPatterns = {
  DCCCC: 'CM', // 900
  CCCC: 'CD', // 400
  LXXXX: 'XC', // 90
  XXXX: 'XL', // 40
  VIIII: 'IX', // 9
  IIII: 'IV', // 4
}

const decimalToRoman = Object.keys(romanToDecimal).reduce((acc, curr) => {
  return {
    // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
    ...acc,
    [romanToDecimal[curr]]: curr,
  }
}, {})
