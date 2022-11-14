# Split Object

Split an object into an array of objects. Each entry in the array will be one
key/value pair from the object.

---

## Strategy

I use to minimal tool for working with Objects using built-in functional Array
methods.

---

## Implementation

There are few things to consider with `split-object`.

- Throw which can create a custom error or throw an exception, which you can
  find in this
  [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
  for more understanding.
- Using `Object.keys().map()` an Array of the form `[key]: value[key]`, can be
  natural & convenient structure.
- I might see some better methods for iterating over Objects in this
  [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

---

## Use Cases

My function in this case is similar to a procedure set of statements that
performs a task of object.

```js
const splitObject = (toSeparate) => {
  if (typeof toSeparate !== 'object') {
    throw new TypeError('is not an object');
  }
  const arr = Object.keys(toSeparate).map((element) => ({
    [element]: toSeparate[element],
  }));

  return arr;
};

splitObject({ a: 1, b: 2, c: 3 }); // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
```

---

## Inspiration

I inspired by many `websites` such
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and
[W3school](https://www.w3schools.com/).

![ Some jest coverage](img/Screenshot%20from%202022-11-14%2020-52-46.png)
