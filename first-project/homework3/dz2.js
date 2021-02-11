// С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».

let str = 'Привет, мир!';
let strReversed = [];

// str[str.length - 1]

for (let i = str.length - 1; i >=0; --i) {
    strReversed.push(str[i]);
}

// console.log(strReversed.toString());
console.log(strReversed.join(''));