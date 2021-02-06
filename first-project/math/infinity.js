Infinity > 100500; // true
-Infinity < -15000; // true
100500 / 0; // Infinity :)

Infinity === Infinity // true

Infinity > Infinity // false
Infinity < Infinity // false

Infiniity >= Infinity // true
Infiniity <= Infinity // true

Infinity + Infinity; // Infinity
-Infinity - Infinity; // -Infinity

Infinity - Infinity; // NaN (Not a Number)
-Infinity + Infinity; // NaN
Infinity / Infinity; // NaN

Infinity / 10; // Infinity
Infinity * 10; // Infinity
Infinity ** 10; // Infinity
Infinity ** Infinity; // Infinity

Infinity ** -Infinity; // 0
(-Infinity) ** Infinity; // Infinity

// - Не используйте Infinity без явной необходимости!
// - Все, что делает бесконечность еще более бесконечной, возвращает бесконечность
// - Любые операции с бесконечностью и числами вернут бесконечность
// - Уменьшение бесконечности при делении или вычитании (прибавлении для отрицательной) бесконечности в JavaScript не работает
// -Две бесконечности равны
// - Деление на 0 дает бесконечность