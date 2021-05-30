/******************** 1 */
/*Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

imgUrl - фотография, значение "https://via.placeholder.com/640x480";
descr - описание, значение "Spacious apartment in the city center";
rating - рейтинг, значение 4;
price - цена, значение 2153;
tags - метаинформация, массив ["premium", "promoted", "top"].*/

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// console.log(apartment);
/******************** */

/***************** 2 */
/*Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

name - имя владельца, значение "Henry";
phone - телефон, значение "982-126-1588";
email - почта, значение "henry.carter@aptmail.com".*/

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
/****************** */

/*************** 3 */
/*Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.*/

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
/***************** */

/***************** 4 */
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
// Change code above this line
/******************* */

/******************* 5 */
/*Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.*/

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// Change code above this line
/******************** */

/*************** 6 */
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// // Change code below this line

// console.log(apartment);
/**************** */

/*************** 7 */
/*Добавь объекту apartment несколько новых свойств:

area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка "Jamaica";
city - город, строка "Kingston".*/

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };
// Change code below this line
/***************** */

/**************** 8 */
/*Дополни код объявления объекта так,
    чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами.
Обязательно используй синтаксис коротких свойств.*/

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,

//   // Change code above this line
// };
/***************** */

/*************** 9 */
/*Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства:
email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".*/

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// };
/***************** */

/************** 10 */
/*Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.*/

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
//   // Change code below this line
// }

// console.log(keys, values);
/**************** */

/*************** 11 */
/*Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.*/

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// console.log(keys, values);
/***************** */

/*************** 12 */
/*Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
Используй переменную propCount для хранения количества свойств объекта.*/

// function countProps(object) {
//   let propCount = 0;

//   for (const obj in object) {
//     if (object.hasOwnProperty(obj)) propCount += 1;
//   }

//   console.log(propCount);
//   return propCount;
// }

// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
/****************** */

/***************** 13 */
/*Перебери объект apartment используя метод Object.keys() и цикл for...of.
Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.*/

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);
/******************** */

/****************** 14 */
/*Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.*/

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }

// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
/******************* */

/***************** 15 */
/*Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств.
Используй методы Object.keys() и Object.values().*/

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys, values);

/******************** */

/**************** 16 */
/*Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
    а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
Используй переменную totalSalary для хранения общей суммы зарплаты.*/

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries);

//   for (const key of keys) {
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += salaries[key];
//     }
//   }

//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
/******************* */

/***************** 17 */
/*Перебери массив объектов colors используя цикл for...of.
Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.*/

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors, rgbColors);
/****************** */

/**************** 18 */
/*Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
Если продукт с таким названием не найден, функция должна возвращать null.*/

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     let name = product.name;

//     if (productName === name) {
//       console.log(product.price);
//       return product.price;
//     }
//   }

//   return null;
//   // Change code above this line
// }

// getProductPrice('Radar');
// getProductPrice('Grip');
// getProductPrice('Scanner');
// getProductPrice('Droid');
// getProductPrice('Engine');
/***************** */

/*************** 19 */
/*Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.*/

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const array = [];

//   for (const product of products) {
//     console.log(product);

//     if (product.hasOwnProperty(propName)) {
//       array.push(product[propName]);
//     }
//   }

//   console.log(array);
//   return array;
// }

// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
// getAllPropValues('category');
/***************** */

/**************** 20 */
/*Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.*/

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   //   // Пиши код ниже этой строки
//   let total = 0;

//   for (const prop of products) {
//     let name = prop.name;

//     console.log(name);
//     if (productName === name) {
//       total = prop.price * prop.quantity;
//     }
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice('Blaster');
// calculateTotalPrice('Radar');
// calculateTotalPrice('Droid');
// calculateTotalPrice('Grip');
// calculateTotalPrice('Scanner');
/***************** */

/**************** 21 */
/*Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня(meanTemperature).
Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;
// //const yesterday = highTemperatures.yesterday;
// //const today = highTemperatures.today;
// //const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
/**************** */

/**************** 22 */
/*В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.
Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// //const yesterday = highTemperatures.yesterday;
// //const today = highTemperatures.today;
// //const tomorrow = highTemperatures.tomorrow;
// //const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
// console.log(icon);
/***************** */

/***************** 23 */
/*Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации 
свойств объекта highTemperatures.
Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// //const highYesterday = highTemperatures.yesterday;
// //const highToday = highTemperatures.today;
// //const highTomorrow = highTemperatures.tomorrow;
// //const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

/******************* */

/****************** 24 */
/*Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..*/

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
/****************** */

/****************** 25 */
/*Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками.
Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.
Задай значение по умолчанию для иконок,
    переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".*/

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
/*
const highToday = forecast.today.high;
const lowToday = forecast.today.low;
const todayIcon = forecast.today.icon;

const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon;
*/
/******************* */

/***************** 26 */
/*Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Замени объявления переменных
todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.*/

// Change code below this line

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   //  const todayLow = forecast.today.low;
//   //  const todayHigh = forecast.today.high;
//   //  const tomorrowLow = forecast.tomorrow.low;
//   //  const tomorrowHigh = forecast.tomorrow.high;
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Change code above this line

//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } });
/******************* */

/******************** 27 */
/*В переменной scores хранится массив результатов тестирования.Используя распыление и методы Math.max() и Math.min() дополни код так,
    чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.*/

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore, worstScore);

/*********************** */

/******************* 28 */
/*В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
В переменной worstScore был самый низкий общий балл.*/

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log('allScores =', allScores);
// console.log('bestScore =', bestScore);
// console.log('worstScore =', worstScore);
/******************** */

/****************** 29 */
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const defSet = { ...defaultSettings };
// console.log(defSet);

// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const overSet = { ...overrideSettings };
// console.log(overSet);

// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);
/******************* */

/***************** 30 */
/*Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.Тогда, в новом объекте задачи,
    в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.*/

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   const newTask = { completed, category, priority, ...data };

//   console.log(newTask);
//   return newTask;
// }

// makeTask({});
// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });
// makeTask({ category: 'Finance', text: 'Take interest' });
// makeTask({ priority: 'Low', text: 'Choose shampoo' });
// makeTask({ text: 'Buy bread' });
/**************** */

/***************** 31 */
/*Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, 
считала и возвращала их сумму.*/

// function add(...args) {
//   let value = 0;

//   for (const arg of args) {
//     value += arg;
//   }

//   console.log(value);
//   return value;
// }

// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);
/******************** */

/***************** 32 */
/*Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так,
    чтобы она считала сумму только тех аргументов, которые больше чем заданное число.
Это число должно быть первым параметром функции.*/

// Change code below this line
// function addOverNum(values, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > values) {
//       total += arg;
//     }
//   }

//   console.log(total);
//   return total;
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);
/******************** */

/**************** 33 */
/*Функция findMatches() принимает произвольное количество аргументов.
Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы,
    начиная со второго, которые есть в массиве первого аргумента.

    Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2],
    потому что только они есть в массиве первого аргумента.*/

// function findMatches(...args) {
//   const matches = [];

//   for (let i = 1; i < args.length; i += 1) {
//     if (args[0].includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }

//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);
/****************** */

/***************** 34 */
/*Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии
с getBooks() и addBook(bookName).

Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку "Deleting book <имя книги>",
    где < имя книги > это значение параметра bookName.

Метод updateBook(oldName, newName) будет обновлять название книги на новое.Возвращает
строку "Updating book <старое имя> to <новое имя>",
    где < старое имя > и < новое имя > это значения параметров oldName и newName соотвественно.*/

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],

//   getBooks() {
//     console.log('Returning all books');
//     return 'Returning all books';
//   },

//   addBook(bookName) {
//     console.log(`Adding book ${bookName}`);
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     console.log(`Deleting book ${bookName}`);
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     console.log(`Updating book ${oldName} to ${newName}`);
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// bookShelf.getBooks();
// bookShelf.addBook('Haze');
// bookShelf.removeBook('Red sunset');
// bookShelf.updateBook('Sands of dune', 'Dune');
/******************* */

/***************** 35 */
/*Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент*/

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

  updateBook(oldName, newName) {
    const index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);
  },
};

// bookShelf.updateBook('The last kingdom', 'Dune');
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
/********************* */

/******************* 36 */
/*К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий.
Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.*/

// const atTheOldToad = {
//   // Change code below this line
//   //potions:[],
//   // Change code above this line
// };
// atTheOldToad.potions = [];

// console.log(atTheOldToad);

/********************** */

/******************** 37 */
/*Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.*/

// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code above this line
//   getPotions() {
//     console.log(this.potions);
//     return this.potions;
//   },
// };
/********************** */

/****************** 38 */
/*Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.*/

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     return this.potions;
//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion('Invisibility');
// atTheOldToad.addPotion('Power potion');
/******************** */

/******************** 39 */
/*Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.*/

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');
/*********************** */

/******************** 40 */
/*Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName,
    в массиве зелий в свойстве potions.*/

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     const index = this.potions.indexOf(oldName);
//     this.potions.splice(index, 1, newName);
//   },
// };
// console.log(atTheOldToad);

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
/******************* */

/******************* 41 */
/*Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой,
    а в будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions будет храниться массив объектов
со следующими свойствами.

{
  name: "Dragon breath",
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.*/

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     const { potions } = this;
//     const { name } = potionName;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === name) {
//         return `Potion ${name} is already equipped!`;
//       }
//       potions.push(potionName);
//     }
//   },

//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);

//         return potions;
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;

//         return potions;
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// tTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
/********************* */
