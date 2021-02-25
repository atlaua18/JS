import binarySearch from "./binarySearch.js";
import simpleSearch from "./simpleSearch.js";

let array = [];

for(let i = 0; i < 100000000; i++) {
    array[i] = i + 1;
}


console.log('Бинарный поиск: \n');
const startB = new Date().getTime();
binarySearch(array, 9999999);
const endB = new Date().getTime();
console.log(`Выполнилось за: ${endB - startB}ms`);


console.log('Простой поиск: \n');
const startS = new Date().getTime();
simpleSearch(array, 9999999);
const endS = new Date().getTime();
console.log(`Выполнилось за: ${endS - startS}ms`);








// const startB = new Date().getTime();

// import binarySearch from "./binarySearch.js";
// //const binarySearch = require("./binarySearch.js");

// console.log('Бинарный поиск: \n');
// binarySearch();

// const endB = new Date().getTime();
// console.log(`${endB - startB}ms`);




// const startS = new Date().getTime();

// import simpleSearch from "./simpleSearch.js";

// console.log('Простой поиск: \n');
// simpleSearch();

// const endS = new Date().getTime();
// console.log(`${endS - startS}ms`);