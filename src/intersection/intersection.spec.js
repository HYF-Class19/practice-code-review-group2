import { intersectSol } from './intersection.js';

for (const solution of [intersectSol]) {
  describe(`${solution.name}: creates new array with no duplicated values in the return`, () => {

    //default return 
    describe('should return empty array if no argument', () => {
        it('default parameters should return empty array', () => {
          expect(solution([])).toEqual([]);
        });
        it('[]-- [] --> []', () => {
          expect(solution([], [])).toEqual([]);
        });
    });

    //duplicated values  
    describe('return new array with no duplicated elements', () => {
      it('[2, 1] -- [2, 3] --> [2]', () => {
        expect(solution([2, 1], [2, 3])).toEqual([2]);
      });
      it('[1, 2, 1] -- [2, 3] --> [2]', () => {
        expect(solution([1, 2, 1], [2, 3])).toEqual([2]);
      });
      it('[5, 5, 8, 7] -- [5, 7, 9] --> [5, 7]', () => {
        expect(solution([5, 5, 8, 7], [5, 7, 9])).toEqual([5, 5, 7]);
      });
      it('[e, e, h, g] -- [e, f, g] --> [e, g]', () => {
        expect(solution(['e', 'e', 'h', 'g'], ['e', 'f', 'g'])).toEqual(['e', 'e', 'g']);
      });
      it('[car, bike, motor, car] -- [car, plane, bike] --> [car, bike]', () => {
        expect(solution(['car', 'bike', 'motor', 'car'], ['car', 'plane', 'bike'])).toEqual(['car', 'bike', 'car']);
      });
    
     describe('function do not have side effects', () => {
        it('should return new array', () => {
          const arr = [1, 2, 1];
          const values = [2, 3];
          const filteredArray = solution(arr, values);
          expect(filteredArray === arr).toEqual(false);
        });
        it('original array should not be modified', () => {
          const arr = [2, 1, 2];
          const values = [2, 3];
          solution(arr, values);
          expect(arr).toEqual([2, 1, 2]);
        });
      });


      //empty array
      describe('it should return empty array if no duplicated values ', () => {
        it('[a, b, c]-- [f, j, k] --> []', () => {
          expect(solution(['a', 'b', 'c'], ['f', 'j', 'k'])).toEqual([]);
        });
      });

      //type error
      describe('if input is not array it should throw an error', () => {
        it('1, 2, 1 -- [1, 2, 3] -->Error', () => {
          expect(() => solution(1, 2, 1, [1, 2, 3])).toThrowError();
        });

      });
    });
  });
}

