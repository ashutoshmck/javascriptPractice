function concatString(arr) {
  let concatenatedString = "";
  concatenatedString = String(arr[0])
    .substring(1, String(arr[0]).length)
    .concat(String(arr[1]).substring(1, String(arr[1]).length));
  return concatenatedString;
}
const concatStringArrow = (arr) => {
  {
    let concatenatedString = "";
    concatenatedString = String(arr[0])
      .substring(1, String(arr[0]).length)
      .concat(String(arr[1]).substring(1, String(arr[1]).length));
    return concatenatedString;
  }
};
module.exports = { concatString, concatStringArrow };
