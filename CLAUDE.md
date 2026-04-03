# Coding Interview Prep - Claude Code Guide

This project is a JavaScript-based coding challenge repository designed to help you practice common programming interview questions.

## Project Structure

```
src/
└── challenges/
    ├── curry/
    ├── curry-with-placeholders/
    ├── count-bits/
    ├── delete-nth/
    └── ...
```

Each challenge folder contains:
- `challenge.md` - Problem description and requirements
- `solution.js` - Implementation of the solution
- `solution.test.js` - Unit tests using Vitest
- `scratch.md` - Empty scratch file for notes

## Technologies

- **JavaScript** - ES6+ JavaScript
- **Vitest** - Fast unit testing framework
- **Biome** - Fast linter and formatter

## Available Commands

```bash
npm test                              # Run all tests (watch mode)
npm test -- --run                     # Run all tests once
npm test -- --run src/challenges/foo  # Run tests for a specific challenge
npm run test:ui                       # Run tests with UI
npm run lint                          # Check code quality
npm run lint:fix                      # Fix linting issues
npm run format                        # Format code
```

## Working with Claude Code

You can ask Claude Code to create new challenges using this format:

```
Create a [beginner/intermediate/advanced] challenge about [topic]
```

Examples:
- "Create a beginner challenge about array manipulation"
- "Create an intermediate challenge about binary trees"
- "Create an advanced challenge about dynamic programming"

Claude will:
1. Create the appropriate folder structure
2. Write a clear problem description in `challenge.md`
3. Implement the **full working solution** in `solution.js`
4. Add comprehensive tests in `solution.test.js` (8-15 test cases covering happy path, edge cases, and boundary values)
5. **Run the tests** (`npm test -- --run src/challenges/<name>`) to verify they all pass against the real implementation
6. **Clear the solution body**, leaving only the function stub with its signature and JSDoc (e.g. `export function foo() {}`) — the user will implement it themselves
7. **Create an empty `scratch.md`** file in the challenge folder

Steps 3-6 are mandatory. Tests must be validated against a working implementation before being handed off as an exercise. Never skip the verification step.

## Challenge Levels

- **Beginner**: Basic algorithms, string/array manipulation, simple data structures
- **Intermediate**: More complex algorithms, common patterns, tree/graph basics
- **Advanced**: Complex algorithms, optimization problems, advanced data structures
