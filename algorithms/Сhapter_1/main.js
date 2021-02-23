import binarySearch from "./binarySearch.js";
//const binarySearch = require("./binarySearch.js");

let array = [];

for(let i = 0; i < 1000; i++) {
    array[i] = i + 1;
}

binarySearch(array, 666);