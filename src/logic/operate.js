import Big from 'big.js';

export default function operate(firstNumber, sencondNumber, calculation) {
  const valueOne = Big(firstNumber);
  const valueTwo = Big(sencondNumber);
  if (calculation === '÷') {
    try {
      return valueOne.div(valueTwo).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (calculation === 'x') {
    return valueOne.times(valueTwo).toString();
  }
  if (calculation === '%') {
    try {
      return valueOne.mod(valueTwo).toString();
    } catch (err) {
      return "Can't Evaluate";
    }
  }
  if (calculation === '+') {
    return valueOne.plus(valueTwo).toString();
  }
  if (calculation === '-') {
    return valueOne.minus(valueTwo).toString();
  }
  throw Error(`Unknown calculation '${calculation}'`);
}
