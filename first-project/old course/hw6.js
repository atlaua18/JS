let users = [
    { name: 'Виталя', password: '123', login: 'vitaliqmetaliq' },
    { name: 'Иван', password: '456', login: 'ivan' },
    { name: 'Егор', password: '789', login: 'egor' },
    { name: 'Андрей', password: '1011', login: 'andrew' }
]

function sayHi(someArray) {

    let l = prompt('Введите логин');
    let p = prompt('Введите пароль');

    for (let i = 0; i < someArray.length; i++) {

        if (l === someArray[i].login && p === someArray[i].password) {
            return 'Привет, ' + someArray[i].name;
        } 
        // else { //if (l === null || p === null) {
        //     alert('Вы что-то не ввели. Попробуйте еще раз');
        // } 
    }

    return 'Вы что то ввели не так';


    // let isFounded = false;

    // while (!isFounded) {

    //     let l = prompt('Введите логин');
    //     let p = prompt('Введите пароль');

    //     if (l === someArray[i].login && p === someArray[i].password) {
    //         alert('Привет, ' + someArray[i].name);
    //         isFounded = true;
    //     } else if (l === null || p === null) {
    //         alert('Попробуйте еще раз');
    //     }
    // }
}

alert(sayHi(users));