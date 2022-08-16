/*
    심볼타입이란?
    ES6에서 새롭게 도입된 원시형 타입중 하나 -> 객체의 속성으로 사용.
    심볼형을 사용하면 유일무이한 값(고유한 값)을 가진다.
    불변값.
    객체의 속성으로 심볼을 사용.(충돌을 방지하기 위해)

    -기존 타입들: 원시형, 참조형
        1. 원시형: number, string, null, undefined, boolean, + symbol(ES6)
        2. 참조형: object(object, array, functuin...)
*/

let ar2 = [1, 2, 3, 4, 5];

//length가 덮어씌워짐
console.log(ar2.length); // 5
ar2.length = 50;
console.log(ar2.length); // 50

let ar3 = [1, 2, 3, 4, 5];
//심볼 생성
const length = Symbol("length");
ar3[length] = 50;
console.log(ar3.length); // 5
console.log(ar3[length]); // 50

//객체 속성을 추가하거나 덮어써질 우려가 있다면 충돌을 피하기 위한 수단으로 심볼을 사용할 수 있다.
