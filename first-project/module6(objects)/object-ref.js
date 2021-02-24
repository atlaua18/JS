let digit = 20;
let otherDigit = digit;

// исходное значение не меняется, так как otherDigit копирует значение из digit
otherDigit += 5;

// digit 20, otherDigit 25

// объект - ссылочный тип данных

let obj = { model: 'VW Polo'};
let otherObj = obj;

// obj и otherObj ссылаются на один и тот же объект, поэтому свойство поменяются и там, и там 
otherObj.model = 'Volkswagen Polo';

console.log(digit); // 20
console.log(otherDigit); // 25
console.log(obj); // { model:'Volkswagen Polo' }
console.log(otherObj); // { model:'Volkswagen Polo' }