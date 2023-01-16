let vowels = ['a', 'e', 'i', 'o', 'u'];
function countVowel(str) {
  let count = 0;
  String(str)
    .split('')
    .forEach((element) => {
      if (vowels.includes(element.toLowerCase())) count++;
    });
  return count;
}
const countVowelArrow = (str) => {
  let count = 0;
  String(str)
    .split('')
    .forEach((element) => {
      if (vowels.includes(element)) count++;
    });
  return count;
};
module.exports = { countVowel, countVowelArrow };
