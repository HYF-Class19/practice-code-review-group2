# challenge name: strategy name: Intersection

Write a function that finds all the values shared between two arrays.

## Strategy

It uses two functions: filter function to find the shared values of two arrays and
a combination of indexOf and Push to remove the duplicated values.

## Case

Here's a starter docstring for your solutions. Feel free to rewrite it if that
helps you understand:

```js
/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * intersection([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */
```

### Inspiration

Inspired by the coders discussion in [Stackoverflow](https://stackoverflow.com/)
and rules in
[Mozilla for Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->

> Docstring is adapted from
> [lodash's intersection](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7498)
