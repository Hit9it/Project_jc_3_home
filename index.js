// - створити функцію яка обчислює та повертає площу прямокутника висотою
function PlPr(a,b){
    S = a * b;
    return S;
}
 let a = 5;
 let b = 10
 let s = PlPr(a, b);
console.log(s);



// - створити функцію яка обчислює та повертає площу кола
function PlKola(y){
    S = Math.PI * Math.pow(y,2);
    return S;
}
let x = 9;
let O = PlKola(x);
console.log(O);



// - створити функцію яка обчислює та повертає площу циліндру
function PlSel(a,b){
    S = 2*Math.PI*Math.pow(r,2)+(2*Math.PI*h)
    return S;
}
let r = 40;
let h = 100;
let C = PlSel(r, h);
console.log(C);



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);




// - створити функцію яка створює блок з текстом. Текст задати через аргумент
function BlockText(a){
    document.write(`<div>${a}</div>`);
}
let RRR = 'створити функцію яка створює блок з текстом. Текст задати через аргумент';
BlockText(RRR);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(text){
   document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
let bla_bla='створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий';
ul(bla_bla);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul2(text, number){

    document.write(`<ul>`);
    for (let i=0; i<number;i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
let bla_bla_bla='Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)';
let n = 7;
ul2(bla_bla_bla, n);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function Arr1(myArr) {
    let arrNumber = [];
    let arrString = [];
    let arrBoolean = [];
    for(i = 0; i < myArr.length; i++) {
        if (typeof myArr === 'number') {
            arrNumber.push(...myArr);
        }
        if (typeof myArr === 'string') {
            arrString.push(...myArr);
        }
        if (typeof myArr === 'boolean') {
            arrBoolean.push(...myArr);
        }
    }
    console.log(arrNumber);
    console.log(arrString);
    console.log(arrBoolean);
}
let arr=[1,2,3,4,'five','six','seven',true,'nine',false]

Arr1(arr);