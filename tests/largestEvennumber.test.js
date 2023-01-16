const findLargest = require('./largestEvennumber');

describe('Largest Even Number in an array', () => {
  test('Largest even number among 1,2,3 should be 2', () => {
    var result = findLargest.findLargest([1, 2, 3]);
    expect(result).toBe(2);
  });
  test('Largest even number among 1,2,3 should not be 3', () => {
    var result = findLargest.findLargestNo([1, 2, 3]);
    expect(result).not.toBe(3);
  });
});
