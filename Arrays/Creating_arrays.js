// Ways of creating variables in javascript.

var numbers = [];
console.log(numbers.length);

var numbers2 = [1,2,3,4,5];
console.log(numbers2.length);

var numbers3 = new Array(1,2,3,4,5);
console.log(numbers3.length);

// In JavaScript, arrays can have different data types

var objects = [1, "joe", true, null];


// There are functions that can check if something is an array.

var numbers4 = 4;
var arr = [7, 4, 1776];
console.log(Array.isArray(numbers4));
console.log(Array.isArray(arr));