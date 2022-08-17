/*
    new 연산자의 내부동작

    내부적으로 빈 객체를 생성한 후에 같은 이름의 프로토타입 객체를 프로토타입으로 설정.
*/

//생성자
function Add(a, b) {
    this.a = a;
    this.b = b;
}

//프로토타입에 메서드 추가
Add.prototype.plus = function () {
    return this.a + this.b;
};

//새로운 객체 생성
const add = new Add(111, 222);

//내부 동작(이런식으로 동작)
const newobj = {};
newobj.__proto__ = Add.prototype;
Add.apply(newobj, [111, 222]);

/*
    정리

    생성자함수와 new 연산자에 의해 새로운 객체 생성 -> 객체의 생성과 새로운 객체의 원형을 지정
*/

/*-----------------------------------------------------------------------------------------------*/

/*
    생성자 함수의 내부동작

    비슷한 객체를 여러개 생성시 사용하면 편리.
    생성자 함수의 첫글자는 대문자로 작성.
    새롭게 생성되는 객체는 자신 가리키는 것. -> this 사용.
    new 연산자를 사용해서 새로운 객체 생성.
*/

/*
    내부 실행과정
*/
function Person(name, age) {
    // this = {}; //this라는 빈 객체를 하나 생성한 후에 속성을 추가.

    this.name = name;
    this.age = age;

    // return this;
}

let p1 = new Person("홍길동", 20);
let p2 = new Person("이순신", 30);
let p3 = new Person("강감찬", 40);

/*
    정리

    생성자 함수 -> 비슷한 객체를 만들어내는 공장
    new 연산자를 사용하여 새로운 객체를 생성시에는 생성자 함수 내부에서 위와 같은 처리로 새로운 객체가 생성.
*/
