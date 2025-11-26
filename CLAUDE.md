# Coding Interview Prep - Claude Code Guide

This project is a TypeScript-based coding challenge repository designed to help you practice common programming interview questions organized by difficulty level.

## Project Structure

```
src/
└── challenges/
    ├── beginner/      # Entry-level challenges
    ├── intermediate/  # Medium difficulty challenges
    └── advanced/      # Complex challenges
```

Each challenge folder contains:
- `challenge.md` - Problem description and requirements
- `solution.ts` - Implementation of the solution
- `solution.test.ts` - Unit tests using Vitest

## Technologies

- **TypeScript** - Type-safe JavaScript
- **Vitest** - Fast unit testing framework
- **Biome** - Fast linter and formatter

## Available Commands

```bash
npm test          # Run all tests
npm run test:ui   # Run tests with UI
npm run lint      # Check code quality
npm run lint:fix  # Fix linting issues
npm run format    # Format code
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
3. Implement the solution in `solution.ts`
4. Add comprehensive tests in `solution.test.ts`

## Challenge Levels

- **Beginner**: Basic algorithms, string/array manipulation, simple data structures
- **Intermediate**: More complex algorithms, common patterns, tree/graph basics
- **Advanced**: Complex algorithms, optimization problems, advanced data structures
