function findLongestString(str) {
  let maxLengthString = '';
  str.forEach((element) => {
    maxLengthString =
      element.length > maxLengthString.length ? element : maxLengthString;
  });
  return maxLengthString;
}
const findLongestStringArrow = (str) => {
  let maxLengthString = '';
  str.forEach((element) => {
    maxLengthString =
      element.length > maxLengthString.length ? element : maxLengthString;
  });
  return maxLengthString;
};
//TODO: incorporate test case where if length of two strings is same, then lexicographically smaller string to be taken
module.exports = {
  longestString: findLongestString,
  longestStringArrow: findLongestStringArrow,
};
