function longestString(str) {
  let maxLengthString = "";
  str.forEach((element) => {
    if (element.length > maxLengthString.length) maxLengthString = element;
  });
  return maxLengthString;
}
const longestStringArrow = (str) => {
  let maxLengthString = "";
  str.forEach((element) => {
    if (element.length > maxLengthString.length) maxLengthString = element;
  });
  return maxLengthString;
};

module.exports = { longestString, longestStringArrow };
