// generics есть не только в TS

const myArr0: Array<number> = [1,2,3];

// напишем свой interface
const myArr: myArray<number> = [1,2,3];

// дженерики как аргументы у функции
interface myArray<T> { // myArray принимает некий тип Т
    [N: number]: T; // и устанавливает наш тип Т в индекс сигнатуру

    map<U>(fn: (el: T, index: number, arr: myArray<T>) => U): myArray<U>;
}

let valueA = myArr[1];

myArr.map // показывает ошибку, так как TS ничего не знает о методе map, мы переопределили тип нашим собственным дженериком, в котором мы не указали метод map
// ошибка исчезает, когда определяем метода map
myArr.map((f) => f + 1);
myArr.map((f) => `f + ${f}`);


function identity<T>(arg: T): T {
    return arg;
}
let result = identity(12);



function getLen<T extends Array<any>>(arr: T): number {
    return arr.length;
}
getLen('sdgfs'); // ошибка, не подходит под тип
getLen([1, 2, 3]);



interface IValueWithType<T> { //I - interface
    type: string;
    value: T
}

function withType<U>(arg: U): IValueWithType<U> {
    return {
        type: typeof arg, //typeof возвращает СТРОКОВОЕ значение
        value: arg
    }
}

const result2 = withType(123);


// встроенные дженерики в TS
// это Array, выше

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

// Omit - 'выкидывает/выбрасывает' из нашего interface определенные ключи // чтобы удалять из других interface'ов ключи
const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = { // ключ обязательно из interface
    type: 'asd',
};

// Picked - забрать ключи/ то есть в interface останется только те ключи, которые указали
const picked: Pick<IExample<number>, 'isEmpty'> = {
    isEmpty: true,
}

// Partial - типа в interface ставит ?
const partial: Partial<IExample<object>> = {}