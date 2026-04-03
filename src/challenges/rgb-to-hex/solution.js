/**
 * Converts RGB decimal values to a hexadecimal string.
 * Values outside the 0-255 range are clamped to the nearest valid value.
 *
 * @param {number} r - Red value
 * @param {number} g - Green value
 * @param {number} b - Blue value
 * @returns {string} 6-character uppercase hex string
 */
export function rgb(r, g, b) {
  return `${byteToHex(r)}${byteToHex(g)}${byteToHex(b)}`
}

function byteToHex(d) {
  const quotient = Math.floor(d / 16)
  const rest = d % 16
  return `${digitToHex(quotient)}${digitToHex(rest)}`
}

function digitToHex(d) {
  if (d < 10) {
    return d.toString()
  }
  return String.fromCharCode(65 + (d % 10))
}
