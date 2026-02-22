# RGB to Hex Conversion

## Difficulty: Beginner

## Description

The `rgb` function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.

Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

**Note:** Your answer should always be 6 characters long, the shorthand with 3 will not work here.

## Examples

```
rgb(255, 255, 255)  --> "FFFFFF"
rgb(255, 255, 300)  --> "FFFFFF"
rgb(0, 0, 0)        --> "000000"
rgb(148, 0, 211)    --> "9400D3"
rgb(-20, 275, 125)  --> "00FF7D"
```

## Constraints

- Each parameter (r, g, b) can be any integer (negative, zero, or positive)
- Values below 0 should be treated as 0
- Values above 255 should be treated as 255
- The returned string must be uppercase and exactly 6 characters long
