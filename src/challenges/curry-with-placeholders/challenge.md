# Curry Function with Placeholders

## Description

This is an extension of the basic curry function. In addition to partial application, this version supports **placeholders** that allow you to skip arguments and fill them in later.

Please implement a `curry()` function that:
1. Accepts a function and returns a curried version
2. Has a `placeholder` property that can be used to skip arguments
3. Placeholders can be filled in subsequent calls

## Example

```javascript
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(_, 2)(1, 3) // '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
```

## Requirements

- The curried function should support partial application
- Support placeholders using `curry.placeholder`
- Placeholders should be filled in order by subsequent arguments
- It should work with any number of arguments
- All combinations of argument groupings and placeholders should work

## Further Reading

- [Lodash curry with placeholders](https://lodash.com/docs/4.17.15#curry)
- [Currying and Partials - JavaScript.info](https://javascript.info/currying-partials)
