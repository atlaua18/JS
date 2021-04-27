// JS Types
//typeof

const str = 'string'; // typeof srt -> 'string'
const num = 2; // typeof num -> 'number'
const nan = NaN; // typeof nan -> 'number'
const obj = {}; // typeof obj -> 'object'
const arr = []; // typeof arr -> 'object'
const nul = null; // typeof null -> 'object'
const sym = Symbol(); // typeof sym -> 'symbol'
const und = undefined; // typeof und -> 'undefined'
const _void = void 0; // typeof _void -> 'undefined'
const bool = true; // typeof bool -> 'boolean'
const fn = () => {}; // typeof fn -> 'function'

let tsStr: string = 'asd';


// так мы можем проверить типы в JS(!) коде
function sumJS(arr){

    //это проверка, не очень удобно, поэтому чаще без проверок
    if(arr instanceof Array) {
        return arr.reduce((a, v) => a + v);
    }
    throw new Error('type mismatch');
}


// это уже TS (указан конкретный тип)
function sumTS(arr: number[]) {
    return arr.reduce((a, v) => a + v);
}
sumTS('123'); // TS покажет ошибку, так как не тот тип

// в JS
// 'some' + 2 // -> 'some2'
// 'some' - 2 // -> NaN
// '2' + 2 // -> '22'
// '2' - 2 // -> NaN

const tsNum = 2;
const tsString = 'str';

const r = tsString + tsNum;
const rTwo = tsString - tsNum; // TS укажет на ошибку, так как исп тип строка
const rTwoY = parseInt(tsString) - tsNum; // теперь число

if(typeof tsString === 'number') { // это условие никогда не выполнится, потому что tsString не может быть числом. (так как это опрежелено выше????)
    const rTwo = tsString - tsNum;
}

// РАБОТА С МАССИВАМИ

// Union type
const strOrNum: string | number = '2';

// это дублирование кода
const strOrNum1: string | number = '2';
const strOrNum2: string | number = '2';
const strOrNum3: string | number = '2';
//вместо такого дублирования:

// Type Alias
type StrOrNum = string | number;

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// Array
const tsArray: number[] = [1,2,3]; // определение массива бесконечного значения???
const tsArrayV: number[] = [1,2,3,'s']; // выдаст ошибку

const tsArrayGeneric: Array<number> = []; // эта форма записи идентична такой форме записи const tsArray: number[] = [1,2,3];

const unionArr: (string | number)[] = [1, 2, '2'];
const unionArr2: Array<string | number> = [1, 2, '2']; // это Generic

// Tuple -  массив фиксированной(!) длины
const myTuple: [number, string] = [1, '2']; // [number, string] - говорит о том, что может быть два элемента таких вот типов
const myTuple1: [number, string] = [1, '2', 4]; // ошибка
const val = myTuple[1000]; // ошибка, можно только 0 или 1, так как всего два элемента

// деструкция 
const [val1, val2] = myTuple;

type StrangeTsTypes = any | unknown | never;