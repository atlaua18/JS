let name = '';
let surname = '';

function getFulName() {
    return this.name + '' + this.surname;
}

let obj = { name, surname, getFulName };

console.log(obj.getFulName());

obj.whoAmI = function() {
    console.log(`Меня зовут ${this.name} ${this.surname}`);
}

obj.whoAmI();

delete obj.getFulName;

// ошибка, свойства уже не существует
console.log(obj.getFulName());

// добавляем функцию другому объекту 2 раза с разными названиями
let otherObj = {
    someMethod: getFulName,
};
otherObj.someOtherMethod = getFulName;

// меня зоут undefined undefined
console.log(otherObj.someMethod());
console.log(otherObj.someOtherMethod());