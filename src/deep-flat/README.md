<!-- # Deep-Flat

Write a function that flattens nested arrays into a single array with no nesting

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that
helps you understand:

```js
/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */
```

> Docstring is adapted from
> [lodash's flattenDeep](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7330) -->

Flat an Array: use a built-in array method

Takes a nested array and returns with one nested array,

---

## Strategy

I want to use built-in array methods to solve this challenge.

---

## Implementation

The `flat()` method creates a new array by flattening a nested array up to the
specified depth.

To avoid side-effects I needed to create a result of the flattend array.

I write my callback directly inside an arrow function and return. I like this
because it's more readable.

---

## Use Cases

You could use this array method to flatten a neted array.

```js
const numbs = [
  12,
  [
    [435, 86],
    [56, 9, 6, 34],
  ],
  5,
  67,
];
console.log(numbs.flat(Infinity)); // [12,435,86,56,9,6,34,5,67]
const names = [
  ama,
  [
    [aida, sam],
    [dan, don],
  ],
  lib,
];
console.log(names.flat(Infinity)); //[ama,aida,sam,dan,don,lib]
```

---

## Inspiration
