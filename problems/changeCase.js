function changeCase(str) {
  let changedString = '';
  String(str)
    .split('')
    .forEach((element) => {
      if (element.toLowerCase() === element) element = element.toUpperCase();
      else element = element.toLowerCase();

      changedString = changedString.concat(element);
    });
  return changedString;
}

const changeCaseArrow = (str) => {
  let changedString = '';
  String(str)
    .split('')
    .forEach((element) => {
      if (element.toLowerCase() === element) element = element.toUpperCase();
      else element = element.toLowerCase();

      changedString = changedString.concat(element);
    });
  return changedString;
};
//console.log(changeCase("MeRRy hAD a LITTle lAMp"));
module.exports = { changeCase, changeCaseArrow };
