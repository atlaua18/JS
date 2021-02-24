// простые
typeof 1; // number
typeof 'abc'; // string
typeof false; // boolean
typeof 123n; // bihint
typeof Symbol(); // symbol

// составные
typeof {}; // object
typeof []; // object
typeof function() {}; // function

// нулевые
typeof undefined; // undefined
typeof null; // object

// расхождения typeof  и системы типов 
typeof null; // object, хотя реальный тип значения - null
typeof function() {}; // function, хотя в системе типов функция не выделяется в отдельный тип

// пример использования 
function getStringValue(unknown) {
    if(typeof unknown === 'string') {
        return unknown;
    }
    if(typeof unknown === 'function') {
        return unknown();
    }
    if(typeof unknown === 'object') {
        return unknown.toString();
    }
    return '';
}

console.log(getStringValue('Просто строка')); // Просто строка
console.log(getStringValue(function () {
    return new Date().getFullYear();
})); // выведет текущий год (2021)
console.log(getStringValue([1, 2, 3])); // 1,2,3 (результат toString())
console.log(getStringValue({})); // [object Object] (результат toString())
console.log(getStringValue(true)); // пусто, так как наша функция function getStringValue(unknown) не знает, что делать со значением true 