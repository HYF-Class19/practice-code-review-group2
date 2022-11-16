 *flattens an array
 * Returns with a new array without modifying the original array
 */

const deepFlat = (arrayToFlat = []) => {
  const result = arrayToFlat.flat(Infinity);
  return result;
};

describe('should flat all our array in one nested array', () => {
  // when the array is empty
  it('empty arrays', () => {
    const expected = [];
    const received = deepFlat([]);
    expect(expected).toEqual(received);
  });
  // nested array of numbers
  it('nested numbers', () => {
    const expected = [1, 2, 3, 6, 8, 9, 4, 6, 5];
    const received = deepFlat([1, 2, 3, [6, 8, 9], [4, 6], 5]);
    expect(expected).toEqual(received);
  });
  // nested array of strings
  it('nested strings', () => {
    const expected = ['hello', 'adam', 'world'];
    const received = deepFlat(['hello', [['adam'], 'world']]);
    expect(received).toEqual(expected);
  });
  // nested array of characters
  it('nested alphabets', () => {
    const expected = ['a', 'b', 'c', 'd', 'e'];
    const received = deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
    expect(received).toEqual(expected);
  });
});
