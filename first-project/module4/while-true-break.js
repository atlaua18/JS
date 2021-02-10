let i;

console.log('Цикл for');

//цикл for
for (i = 0; i < 11; i += 2) {
    console.log(i);
}

console.log('Цикл while');

//аналогичный цикл while с условием для завершения в теле цикла
i = 0;
while (true) {
    if (i > 10) break;
    console.log(i);
    i += 2;
}
// while (true) вечный цикл