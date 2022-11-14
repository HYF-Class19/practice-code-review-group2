// import { splitObject } from './split-object.js';

const splitObject = (toSeparate) => {
  if (typeof toSeparate !== 'object') {
    throw new TypeError('is not an object');
  }
  const arr = Object.keys(toSeparate).map((element) => ({
    [element]: toSeparate[element],
  }));

  return arr;
};

describe('Splits an object into multiple objects with one key/value pair each', () => {
  describe('The object to split into key/value pairs.', () => {
    test(' Returns a new array with one entry for each key/value pair', () => {
      expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
        { a: 1 },
        { b: 2 },
        { c: 3 },
      ]);
    });

    test('return an empty object to the new empty array', () => {
      expect(splitObject({})).toEqual([]);
    });

    test('return a new array with one entry for each key or value pair', () => {
      expect(
        splitObject({
          name: 'robs',
          age: 25,
          tall: true,
          userName: 'sbor',
        }),
      ).toEqual([
        { name: 'robs' },
        { age: 25 },
        { tall: true },
        { userName: 'sbor' },
      ]);
    });

    test('return an new array to the new object array', () => {
      expect(
        splitObject({ id: 1, name: '1-First' }),
      ).toEqual([{ id: 1 }, { name: '1-First' }]);
    });

    test('return an empties object to the new empties arrays ', () => {
      expect(splitObject({})).toEqual([]);
    });
    test('if argument an array return an array ', () => {
      expect(splitObject([])).toEqual([]);
    });
    test('if argument is null throw type error ', () => {
      expect(() => splitObject(null)).toThrow(TypeError);
    });

    test('if an argument is not an object throw type errors ', () => {
      expect(() => splitObject(0)).toThrow(TypeError);
    });
    test('if an argument is string throw error ', () => {
      expect(() => splitObject('')).toThrow(TypeError);
    });
  });
});
