import { numeral, roman, romanRegex, yearRegex } from './constants'

const notValid = (str) => <span className="notValid">Not valid {str}</span>

/**
 * Converts a year value to Roman numeral
 * @param value
 * @returns {string|*}
 */
const convertToRoman = (value) => {
  if (!value || !value.match(yearRegex)) return notValid('year');

  let romanValue = '';
  for (let i of Object.keys(roman)) {
    const times = Math.floor(value / roman[i]);
    value -= times * roman[i];
    romanValue += i.repeat(times);
  }

  return romanValue;
}

/**
 * Converts a Roman numeral to year
 * @param value
 * @returns {number|*}
 */
const convertFromRoman = (value) => {
  if (!value || !value.match(romanRegex)) return notValid('roman numeral')

  let total = 0;
  let current, last = 0;
  value.split("").reverse().forEach(e => {
    current = numeral[e];
    if (current >= last) {total += current;} else {total -= current;}
    last = current;
  });

  return total;
}


export {
  convertFromRoman,
  convertToRoman
}