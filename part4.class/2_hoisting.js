/*
    함수 레벨 스코프 vs 블록 레벨 스코프
*/
var a = 111; // 전역변수
// console.log(a); //111

{
    var a = 333; //전역변수 -> 함수 레벨 스코프, 중복 허용, 호이스팅 가능, 함수가 아닌 변수 선언은 모두 전역
}
// console.log(a); //333

function myA() {
    var a = 111; //함수 내 지역변수
}

/*
   호이스팅

    -사전적의미 -> 끌어올리다(scope)
    -자바스크립트는 기본적으로 모든 선언문(var, let,const, function 등)을 호이스팅.
    -스코프안의 어디에서든 변수 선언은 최상위에서 선언한 것과 동일.
    -var키워드와 let, const키워드로 선언한 변수는 차이가 있다.
*/

// console.log(testA); //undefined, 호이스팅을 하면서 변수 선언과 값(undefined) 할당이 동시에 일어난다.
// var testA;
// console.log(testA); //undefined

// console.log(testB); //error(참조 에러, 초기화관련), 호이스팅이 되긴 하지만 초기값을 할당하기 전까지 참조가 불가능, 변수선언 라인에 도달하면 초기값 할당됨.
// let testB;
// console.log(testB); //undefined

/*
    클래스 호이스팅


*/
// console.log(Person); //let과 const와 같은 error를 출력.
class Person {}

const p1 = new Person();
console.log(p1);

//var vs let, const , class 호이스팅 에러 비교

// var str1 = "Hello, World"; //전역 변수
let str2 = "Hello, World";

const testFunc = function () {
    // console.log(str1); // 변수 선언과 undefined값이 할당
    // var str1 = "Hello, Korea"; //호이스팅, Hello, Korea값 할당

    console.log(str2); // error, 변수 초기화전에 참조를 할 수 없다.(참조 error)
    let str2 = "Hello, Korea"; // 호이스팅, 초기값 할당
};

testFunc(); //undefined

//class 상속
class Parent {}
class Child extends Parent {} //이렇게 상속하면 문제없음.

class Child2 extends Parent2 {} //error, 참조 에러발생.
class Parent2 {}
