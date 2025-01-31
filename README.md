# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error: unexpected string concatenation due to type coercion.

## Bug Description

The `foo` function is intended to add two numbers. However, when one of the arguments is a string, JavaScript converts the number to a string before performing concatenation instead of numerical addition.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using Node.js or a browser's developer console.
3. Observe the unexpected output.

## Solution

The `bugSolution.js` file shows how to prevent this type of bug by using explicit type checking or conversion before the addition operation.