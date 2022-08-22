/*
    이터러블 객체와 이터레이터 객체

    -이터러블 규약과 이터레이터 규약
        이터러블 규약
            for...of반복 구문을 사용하여 객체(반복 가능한 객체)를 반복할 때 -> 값이 열거되고 -> @@iterator메서드가 구현되어 있어야한다.
            @@iterator === Symbol.iterator()
            자바스크립트 내장 객체 -> array, string, map, set, arguments등이 이터러블 규약을 따름.
            이를 반복 가능한 객체, 이터러블 객체등으로 부른다.
            결국 이터러블 객체라면 for...of구문으로 반복시키면서 값의 열거가 가능 -> 이때, 각 객체별로 열거되는 방식에는 차이가 있다.
            ex)
                문자열 -> 한글자씩 따로 열거.
                배열 -> 요소 단위로 하나씩 열거.
            이러한 차이를 공통화하기 위해서 이터러블 객체는 내부적으로 @@iterator 메서드를 구현한다.
            이때 @@iterator메서드는 객체의 속성이나 또는 체이닝상의 객체 중 하나가 속성으로 Symbol.iterator()키클 가져야만 한다.

    -이터러블 객체 생성
        기본적으로 이터러블 객체라면 Symbol.iterator()키를 가진다.
*/

//이터러블 객체
//string
const str1 = "KOREA";
const iterator = str1[Symbol.iterator](); //이터레이터 객체 반환
// console.log(iterator); //이터레이터 객체는 이터레이터 규약에 따라 내부의 next()메서드를 통해 하나씩 값을 순차적으로 열거.
//이때 열거는 객체이면 속성으로 value, done 2가지 속성을 가짐

// console.log(iterator.next()); //K, false
// console.log(iterator.next()); //O, false
// console.log(iterator.next()); //R, false
// console.log(iterator.next()); //E, false
// console.log(iterator.next()); //A, false
// console.log(iterator.next()); //undefined, true

// for (let value of str1) console.log(value);
for (let value of iterator) console.log(value); //같은 값이 나온다
console.clear();

//array
const ar1 = [1, 2, 3, 4, 5];
const iterator2 = ar1[Symbol.iterator]();

console.log(iterator2);
console.log(iterator2.next()); //1, false
console.log(iterator2.next()); //2, false
console.log(iterator2.next()); //3, false
console.log(iterator2.next()); //4, false
console.log(iterator2.next()); //5, false
console.log(iterator2.next()); //undefined, true
console.log("-------------------------------------------------");

for (let value of iterator2) console.log(value); //위에서 iter가 열거가 끝났기 때문에 아무값도 나오지 않는다.
for (let value of ar1) console.log(value);
console.clear();

//이터레이터 객체 직접 구현
let testIterObj = {
    i: 1,
    [Symbol.iterator]: function () {
        return this;
    },
    next: function () {
        //리턴시 next()메서드는 객체를 리턴한다.
        if (this.i < 5) return { value: this.i++, done: false };
        else return { value: undefined, done: true };
    },
};

const iter = testIterObj[Symbol.iterator]();
// console.log(iter);
// console.log(iter.next()); //value: 1, done: false
// console.log(testIterObj.next()); //value: 2, done: false
// console.log(testIterObj.next()); //value: 3, done: false
// console.log(testIterObj.next()); //value: 4, done: false
// console.log(testIterObj.next()); //value: undefined, done: true

for (let value of iter) console.log(value); //1,2,3,4
