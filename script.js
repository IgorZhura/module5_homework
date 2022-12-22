

// задание 1

let exampel = +prompt("Введите значение");
console.log(typeof exampel);
if (exampel){
  console.log(exampel);
} else {
  console.log('Упс, кажется Вы ошиблись');
}
console.log(NaN);

//задание 2
// примет с числом
let x = 87;
if (typeof x === 'number'){
  console.log('x - число');
} else {
  console.log('значение x не определено');
}
// пример со строкой

let x = 44;
if (typeof x === 'string'){
  console.log('x - строка');
} else {
  console.log('значение x не определено');
}

// пример с ллогическим опереатором

let x = 55;
if (typeof x === 'boolean'){
  console.log('x - логический тип')
} else {
  console.log('значение x не определено');
}

// задание 3

let string = 'Hello';
let reverse = string.split('').reverse().join('');
console.log(reverse);

// задание 4

let min = 0;
let max = 100;
let x = Math.floor(Math.random()*(max-min+1)+min);
console.log(x);

// задание 5

let arr = [1, 2, 3, 4];
console.log(arr.length);
let result = arr.map(function(item, index, array){
  return item
});
console.log(arr);
console.log(result);

// задание 6

let arr = [1,2,3,4]
let result = arr.map(function(item, index, array){
  return item
})
console.log(result);
   console.log(Array.isArray(arr));

   // задание 8

   let myMap = new Map();
myMap.set('Ключ - X', 'Значение - Y');

for (let name of myMap.keys()){
  console.log(name)
}
for (let name of myMap.values()){
  console.log(name)
};