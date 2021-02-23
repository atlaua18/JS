let name = 'Анастасия';
let surname = 'Шершнева';
let middle = 'Сергеевна';

let me = {
    name, // анлалогично name: name. Опускается, так как название переменной соотвествует названию свойства
    surname, // анлалогично surname: surname
    middleName: middle,
    birthDate: {year: 1996, month: 3, day: 18},
    occupation: 'Я у мамы ынженер',
    married: false,
    'property with spaces': null,
    // undefined здесь просто для примера, использовать его в качестве значения в своих программах не нужно!
    'property.with.dots': undefined,
};

// создаем новое свойство объекта
me.education = 'ЛЭТИ';
// изменяем существующее свойство объекта
me.occupation = 'Программист';

// те же действия со строками
me['property with spaces'] = 42;
me['property.with.dots'] = 42;

//удаляем свойство из объекта
delete me.education;
delete me['property with spaces'];

//получаем значения свойства
let myName = me.name;
let myBirthYear = me.birthDate.year;
let fourtyTwo = emptyObj['property with spaces'];
//значение несуществующего свойства - undefined
let emptyProp = emptyObj.someProp;

// пустой объект 
let emptyObj = {};