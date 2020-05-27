import * as R from 'ramda';

() => {
  R.insert(2, 5, [1, 2, 3, 4]); // => [1,2,5,3,4]
  R.insert(2)(5, [1, 2, 3, 4]); // => [1,2,5,3,4]
  R.insert(2, 5)([1, 2, 3, 4]); // => [1,2,5,3,4]
};
