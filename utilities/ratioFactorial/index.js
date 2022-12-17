const ratioOfTwoNumbers = require("/home/workspace/coding-practices/coding-practice-2d/utilities/ratio/index.js");
const factorialOfNumber = require("/home/workspace/coding-practices/coding-practice-2d/utilities/factorial/index.js");
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);

  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
