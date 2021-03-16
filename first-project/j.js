const users = [
    { name: 'Виталя', password: '123', login: 'vitaliqmetaliq' },
    { name: 'Иван', password: '456', login: 'ivan' }
]

// users[0].name = 'Настя',

// users.push({ name: 'Настя'})

users = [
    { name: 'Виталя'},
    { name: 'Иван' }
]; // ошибка, потому что const

console.log(Object.entries(users));


// function sayHi(someArray) {

//     for (let i = 0; i < someArray.length; i++) {

//         if (l === someArray[i].login && p === someArray[i].password) {
//             return 'Привет, ' + someArray[i].name;
//         } 
//         // else { //if (l === null || p === null) {
//         //     alert('Вы что-то не ввели. Попробуйте еще раз');
//         // } 
//     }

//     return 'Вы что то ввели не так';

// }

// alert(sayHi(users));