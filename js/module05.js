/********************** 1 */
/* Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild. */

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// parent.hasOwnProperty('surname');
// parent.hasOwnProperty('heritage');
// child.hasOwnProperty('name');
// child.name;
// child.hasOwnProperty('age');
// child.age;
// child.hasOwnProperty('surname');
// child.surname;
// child.hasOwnProperty('heritage');
// child.heritage;
// parent.isPrototypeOf(child);
/*********************** */

/******************** 2 */
/*Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, 
а тот в свою очередь был прототипом для child.*/

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки

parent.isPrototypeOf(child);
parent.surname;
parent.heritage;
parent.hasOwnProperty('surname');
parent.hasOwnProperty('heritage');
ancestor.isPrototypeOf(parent);
child.hasOwnProperty('surname');
child.surname;
child.heritage;
child.hasOwnProperty('heritage');
ancestor.heritage;
ancestor.hasOwnProperty('surname');
ancestor.hasOwnProperty('heritage');
ancestor.surname;
