function checkLeapYear(year) {
  return year % 4 == 0
    ? year % 100 != 0
      ? year % 4 == 0
        ? true
        : false
      : false
    : false;
}
const checkLeapYearArrow = (year) => {
  return year % 4 == 0
    ? year % 100 != 0
      ? year % 4 == 0
        ? true
        : false
      : false
    : false;
};
module.exports = { checkLeapYear, checkLeapYearArrow };
