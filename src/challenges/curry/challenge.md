# Curry Function

## Description

Currying is a useful technique used in JavaScript applications. It transforms a function that takes multiple arguments into a sequence of functions that each take a single argument.

Please implement a `curry()` function, which accepts a function and returns a curried version of that function.

## Example

```javascript
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'
```

## Requirements

- The curried function should support partial application
- It should work with any number of arguments
- All combinations of argument groupings should work

## Further Reading

- [Currying and Partials - JavaScript.info](https://javascript.info/currying-partials)
- [Lodash curry documentation](https://lodash.com/docs/4.17.15#curry)
