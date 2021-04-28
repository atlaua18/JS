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

//#region РАБОТА С МАССИВАМИ

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

//#endregion

//#region ОБЪЕКТЫ 

const myObj: {a: number, b: string} = {a: 1, b: '2'};
// или использовать Type Alias
type MyObjType = {a: number, b: string};
const myObj2: MyObjType = {a: 1, b: '2'};

// для описания типов объекта помимо Type Alias существует запись через  interface
// ДЛЯ ТИПОВ ОБЪЕКТА ЛУЧШЕ ИСПОЛЬЗОВАТЬ INTERFACE !!!!!!!!!!!!!
interface myFirstInterface {
    readonly a: number; // readonly - чтобы не менять значения?, работает только на типах // myObj3.a = 5 будет ошибка, так как у нас уже определено как 2???
    b: string;
    c?: number[]; // ?. optional type // исп, если параметр необязательный 
    e: number | undefined // c?(которое будет либо number[] либо undefined) не равна e: number | undefined
}

const myObj3: myFirstInterface = {
    a: 2,
    b: '123',
    //c: [1],
    e: undefined,
}
const value = myObj3.a; // value - number
const value1 = myObj3.b; // value1 - string
const value2 = myObj3.key; // ошибка, такое свойство не определено в interface
const value3 = myObj3.c; // при ?. value3 будет либо number[] либо undefined, поэтому надо оборачивать в if
if (myObj3.c) {
    const value4 = myObj3.c;
}

// когда получаем что-то сложное или очень много ключей или вообще не знаем, что может прийти
const ApiAnswer0 = { key: 'asd', key1: 'asd'};
// то используется
// индекс сигнатура
interface IndexInterface {
    [n: string]: string; // n обозначает ключ, может быть любой буквой, но почему-то все пишут n 
}
const ApiAnswer: IndexInterface = { key: 'asd', key1: 'asd'}
const val3 = ApiAnswer.randomkey; // TS идентифицирует val3 как строку потому что мы указали индекс сигнатуру [n: string]: string

//#endregion

//#region ФУНКЦИИ

// лучше сначала указать типы, а потом писать реализацию (!!!!!!!!!!!!)
function calculate(method: Methods, left: number, right: number): number { // function calculate(): number - number это типа return функции, то есть какой тип надо вернуть
    switch(method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}
const sum = calculate('sdfsdf', 2, 2);

// тип enum для перечисления, например, методов для функции выше
enum Methods {
    add, // 0 
    sub // 1
}

// можно писать тип функции
const ArrowFn: TypeFn = (j) => 2;
const ArrowFn1: FinInterface = (v) => 2;

type TypeFn = () => number;

interface FinInterface {
    (a: number): void;
}

// ДЛЯ ДЕКЛАРАЦИИ ТИПОВ ОБЪЕКТА ПРЕДПОЧИТАЮТ ИСПОЛЬЗОВАТЬ interface, А ДЛЯ ТИПОВ ФУНКЦИЙ Type Alias

//#endregion




type StrangeTsTypes = any | unknown | never;

// тип any (как бы выключили типизацию) - лучше не использовать
const some: any = 2; // можно положить в переменную все, что угодно, TS не будет ругаться
// но минус в том, что TS будет разрешать делать все, что угодно, даже выполнять методы, которых у этой переменной нет
any.reduce(); 
// и не работает автокомплитер

// тип unknow - можно маркировать переменные, тип которых мы узнаем в дальнейшем. Пока не определим тип, любые операции с переменной недоступны
const un: unknown = '2'; // то же любое значение
// противоположность any
// никаких методов не будет 
un.reduce() // ошибка
//определяем тип
if(typeof un === 'string') {
    un.concat();
}

// тип never - тип возвращаемого значения у функции, такой же как и void
// void - функция, которая ничего не возвращает
function voidFn(): void {

}
const someValue = voidFn(); // someValue тип void

// у функции с never не должно быть окончания, она не должна завершиться, никогда не доработает до конца
function neverFn(): never {
    throw new Error('my exception');
}
const someValue1 = neverFn();