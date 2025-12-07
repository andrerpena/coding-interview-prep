const placeholder = Symbol('curry.placeholder')

const curry = Object.assign(
  function curry(fn) {
    return function curried(...args) {
      // Merge new args into existing args, filling placeholders
      const mergeArgs = (existing, incoming) => {
        const merged = [...existing]
        const remaining = [...incoming]

        // Fill in placeholders with incoming args
        for (let i = 0; i < merged.length && remaining.length > 0; i++) {
          if (merged[i] === placeholder) {
            merged[i] = remaining.shift()
          }
        }

        return { merged, remaining }
      }

      // Check if we have enough non-placeholder args
      const hasEnoughArgs = (args) => {
        const nonPlaceholderCount = args.filter(
          (arg) => arg !== placeholder,
        ).length
        return (
          nonPlaceholderCount >= fn.length &&
          args.slice(0, fn.length).every((arg) => arg !== placeholder)
        )
      }

      if (hasEnoughArgs(args)) {
        return fn(...args.slice(0, fn.length))
      }

      return (...moreArgs) => {
        const { merged, remaining } = mergeArgs(args, moreArgs)
        return curried(...merged, ...remaining)
      }
    }
  },
  { placeholder },
)

export { curry }
