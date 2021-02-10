// тянем карту из колоды, пока не наткнемся на Даму
// колода
let cards = ['2', 'Король', 'Туз', '5', 'Дама', '6', 'Король'];

console.log('Ищем даму в колоде...');

let found = false;

for (let card of cards) {
    console.log(`Из колоды вытянута карта ${card}`);
    if (card === 'Дама') {
        found = true;
        break; //выход из цикла
    }
}

console.log(found ? 'Мы нашли даму!' : 'В колоде нет дам');