function modifyString(str) {
  let modifiedString = '';
  String(str)
    .split('')
    .forEach((element) => {
      modifiedString = modifiedString.concat(
        String.fromCharCode(String(element).charCodeAt(0) + 1)
      );
    });
  return modifiedString;
}
const modifyStringArrow = (str) => {
  let modifiedString = '';
  String(str)
    .split('')
    .forEach((element) => {
      modifiedString = modifiedString.concat(
        String.fromCharCode(String(element).charCodeAt(0) + 1)
      );
    });
  return modifiedString;
};
module.exports = { modifyString, modifyStringArrow };
