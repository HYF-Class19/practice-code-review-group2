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

//Solution 

export function intersection(arr1= '', arr2 = '') {
  return arr1.filter(Set.prototype.has, new Set(arr2));
}
function removeDuplicates(arr3){
    let unique_array = []
    for(let i = 0;i < arr3.length; i++){
        if(unique_array.indexOf(arr3[i]) == -1){
            unique_array.push(arr3[i])
        }
    }
    return unique_array
};
