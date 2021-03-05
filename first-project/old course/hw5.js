// let d = new Date();
// let year = d.getYear();
// let d = new Date(year, month, day);
// let f = Date.prototype.getDate();



// let d = new Date();

// let day = d.getDate(); // возвращает текущий день // Возвращает день месяца (1-31) указанной даты по местному времени.

// let monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
// let month = monthArr[d.getMonth()];
// // let month = d.toLocaleDateString('ru', { month: 'long' } );

// let year = d.getFullYear(); // Возвращает год (4 цифры для 4-х значного года) указанной даты по местному времени. // просто getYear() вернети индекс года - 121

// let dayWeekArr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
// let week = dayWeekArr[d.getDay()];

// let wordForm = function(num,word){  
// 	cases = [2, 0, 1, 1, 1, 2];  
// 	return word[ (num%100>4 && num%100<20)? 2 : cases[(num%10<5)?num%10:5] ];  
// }

// let h = d.getHours();
// let resultH = h + wordForm(h, [' час', ' часа', ' часов']);

// let m = d.getMinutes();
// let resultM = m + wordForm(m, [' минута', ' минуты', ' минут']);

// let s = d.getSeconds();
// let resultS = s + wordForm(s, [' секунда', ' секунды', ' секунд']);

// console.log('Сегодня ' + day + ' ' + month + ' ' + year + ' года' + ', ' + week + ', ' + resultH + ' ' + resultM + ' ' + resultS);






// let h = d.getHours(); // Возвращает часы (0-23) указанной даты по местному времени.
// let m = d.getMinutes();
// let s = d.getSeconds();

// let month = d.getMonth() + 1; // возвращает индекс месяца начиная с 0 (2 - март)
// let w = d.getDay(); // Возвращает день недели (0-6) указанной даты по местному времени.
// let f = d.toLocaleDateString(); // Возвращает строку с датой, чьё представление зависит от системных настроек локали. (например 04.03.2021)
// let g = d.toLocaleTimeString(); // пример 15:31:36
// let p = d.toDateString(); // пример Thu Mar 04 2021

// console.log(d);
// console.log(year);
// console.log(year + ' год');
// console.log('месяц ' + month);
// console.log('день ' + day);
// console.log(w);
// console.log(h + ':' + m);
// console.log(f);
// console.log(g);
// console.log(p);

// let wordForm = function(num,word){  
// 	cases = [2, 0, 1, 1, 1, 2];  
// 	return word[ (num%100>4 && num%100<20)? 2 : cases[(num%10<5)?num%10:5] ];  
// }
// let s = d.getSeconds();
// let result = s + wordForm(s, [' секунда', ' секунды', ' секунд']);

// console.log(result);

function getNowDate() {
    let d = new Date();

    let day = d.getDate(); // возвращает текущий день // Возвращает день месяца (1-31) указанной даты по местному времени.

    let monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let month = monthArr[d.getMonth()];
    // let month = d.toLocaleDateString('ru', { month: 'long' } );

    let year = d.getFullYear(); // Возвращает год (4 цифры для 4-х значного года) указанной даты по местному времени. // просто getYear() вернети индекс года - 121

    let dayWeekArr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let week = dayWeekArr[d.getDay()];

    let wordForm = function (num, word) {
        cases = [2, 0, 1, 1, 1, 2];
        return word[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
    }

    let h = d.getHours();
    let resultH = h + wordForm(h, [' час', ' часа', ' часов']);

    let m = d.getMinutes();
    let resultM = m + wordForm(m, [' минута', ' минуты', ' минут']);

    let s = d.getSeconds();
    let resultS = s + wordForm(s, [' секунда', ' секунды', ' секунд']);

    console.log('Сегодня ' + day + ' ' + month + ' ' + year + ' года' + ', ' + week + ', ' + resultH + ' ' + resultM + ' ' + resultS);
    // setTimeout(getNowDate, 1000);
}

getNowDate();

let timer = setInterval(getNowDate, 1000);
clearInterval(timer);
// console.clear;

// let timerId = setTimeout(getNowDate, 1);
// console.log(timerId);