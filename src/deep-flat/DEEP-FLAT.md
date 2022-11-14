# Flat an Array: use a built-in array method

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
