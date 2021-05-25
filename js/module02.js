//*************** 1 */

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line

//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);
//**************** */

//**************** 2 */

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }

// checkPassword('mangohackzor');
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');
//******************* */

//*************** 3 */

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     //console.log('Your order is empty!');
//     return 'Your order is empty!';
//   }

//   if (ordered > available) {
//     //console.log('Your order is too large, not enough goods in stock!');
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   //console.log('The order is accepted, our manager will contact you');
//   return 'The order is accepted, our manager will contact you';
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);
//***************** */

//************* 4  */

// const fruits = ['apple', 'plum', 'pear', 'orange'];
//*************** */

//************* 5  */
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
//************** */

//************* 6  */
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = 'peach';
// fruits[3] = 'banana';
//*************** */

//************* 7  */
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;
//*************** */

//************* 8  */
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
//************** */

//************* 9  */
// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];

//   return [firstElement, lastElement];
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Earth', 'Mars', 'Venus']);
// getExtremeElements(['apple', 'peach', 'pear', 'banana']);
//************** */

//************ 10 */
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   console.log(words);
//   return words;
// }

// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');
// splitMessage('best_for_week', '_');
//************** */

//************** 11 */
// function calculateEngravingPrice(message, pricePerWord) {
//   // message = message.split(' ').length;
//   // const totalPrice = message * pricePerWord;

//   // console.log(totalPrice);
//   // return totalPrice;
//   return message.split(' ').length * pricePerWord;
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('JavaScript is in my blood', 20);
// calculateEngravingPrice('Web-development is creative work', 40);
// calculateEngravingPrice('Web-development is creative work', 20);
//******************* */

//**************** 12 */
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   console.log(string);
//   return string;
// }
// makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
// makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '');
// makeStringFromArray(['top', 'picks', 'for', 'you'], '_');
//****************** */

//******************** 13 */
// function slugify(title) {
//   const slug = title.toLowerCase().split(' ').join('-');

//   console.log(slug);

//   return slug;
// }
// slugify('Arrays for beginners');
// slugify('English for developer');
// slugify('Ten secrets of JavaScript');
// slugify('How to become a JUNIOR developer in TWO WEEKS');
//********************* */

//******************* 14 */
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
//********************* */

//****************** 15 */
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
//******************* */

//**************** 16 */
// function makeArray(firstArray, secondArray, maxLength) {
//   let thirdArray = [];

//   thirdArray = firstArray.concat(secondArray);
//   // console.log(thirdArray);
//   // console.log(thirdArray.length);

//   if (thirdArray.length > maxLength) {
//     thirdArray = thirdArray.slice(0, maxLength);

//     console.log(thirdArray);
//   } else console.log(thirdArray);
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);
//**************** */

//**************** 17 */
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }
//****************** */

//**************** 18 */
// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   console.log(sum);
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
//******************** */

//***************** 19 */
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }
//******************** */

//****************** 20 */
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += item;
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176, 44, 65454, 44, -6888888]);
//******************* */

//**************** 21 */
// function findLongestWord(string) {
//   const arrayString = string.split(' ');
//   let longestWord = arrayString[0];

//   for (let i = 0; i < arrayString.length; i += 1) {
//     if (longestWord.length < arrayString[i].length) {
//       longestWord = arrayString[i];
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');
//**************** */

//***************** 22 */
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
// createArrayOfNumbers(-9, 1);
//****************** */

//********************* 23 */
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
//******************** */

/********************* 24 */
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit);
// }

// checkFruit('plum');
// checkFruit('mandarin');
// checkFruit('pear');
// checkFruit('Pear');
// checkFruit('apple');
//********************* */

//******************* 25 */

// function getCommonElements(array1, array2) {
//   //Объявить Новый пустой массив,
//   const uniqieElements = [];
//   //через фор оф перебрать элементы первого массива,
//   for (const element of array1) {
//     //через иф проверить включаются элементы второго массива в первый(инклуд),
//     if (array2.includes(element)) {
//       //вывести общие элементы в Новый массив(push)
//       uniqieElements.push(element);
//     }
//   }
//   //и ретерн новый массив
//   console.log(uniqieElements);
//   return uniqieElements;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);
//******************* */

//************** 26 */
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const item of order) {
//     total += item;
//   }

//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);
//***************** */

//**************** 28 */
// Change code below this line

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a, b, c, d, e);
//****************** */

//************** 29 */
// function getEvenNumbers(start, end) {
//   // Change code below this line

//   const number = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       number.push(i);
//     }
//   }

//   console.log(number);
//   return number;
//   // Change code above this line
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);
//**************** */

//**************** 30 */
// const start = 6;
// const end = 90;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
//****************** */

//**************** 31 */
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   //let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       console.log(i);
//       return i;
//       //break;
//     }
//   }

//   //return number;
//   // Change code above this line
// }

// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);
//****************** */

//***************** 32 */
function includes(array, value) {
  // Change code below this line
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
  // Change code above this line
}

includes([1, 2, 3, 4, 5], 3);
includes([1, 2, 3, 4, 5], 17);
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus');
includes(['apple', 'plum', 'pear', 'orange'], 'kiwi');
includes();
