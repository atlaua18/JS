function printObjectProperty(obj, propName) {
    console.log(obj[propName]);
}

let me = {
    name: 'Анастасия',
    surname: 'Шершнева',
    middleName: 'Сергеевна',
    birthDate: {year: 1996, month: 3, day: 18},
    occupation: 'Я у мамы ынженер',
    married: false,
};

printObjectProperty(me, 'name'); // Анастасия
printObjectProperty(me, 'middleName'); // Сергеевна