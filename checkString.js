function checkString(str) {
  if (String(str).length < 6) return false;

  return String(str).endsWith("Script");
}
const checkStringArrow = (str) => {
  if (String(str).length < 6) return false;

  return String(str).endsWith("Script");
};
module.exports = { checkString, checkStringArrow };
