// const getTripleFromEvenNumbers = (numbers) => {
//   if (!Array.isArray(numbers)) throw new Error("Invalid Input");
//   return numbers
//     .map((element) => {
//       if (!Number.isInteger(element)) throw new Error("Not an integer input");
//       return element * 3;
//     })
//     .filter((number) => number % 2 == 0);
// };
const getTripleFromEvenNumbers = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error("Invalid Input");
  return numbers.reduce((acc, item) => {
    if (!Number.isInteger(item)) throw new Error("Not an integer input");
    if ((item * 3) % 2 == 0) acc.push(item * 3);
    return acc;
  }, []);
};
module.exports = { getTripleFromEvenNumbers };
