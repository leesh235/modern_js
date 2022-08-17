/*
    프로토타입 객체의 속성

    -constructor
        함수를 가르킨다. (참조)

    -서로가 참조
        서로가 연결고리 역할
        constructor <--> __proto__

    -인스터스 (new 연산자에 의해 새롭게 생성된 객체)
        생성자 함수(Animal) <--> new 객체(tiger, lion)

    -인스턴스가 어떤 생성자 함수로 생성된 것인지 알아내는 방법
        프로토타입을 알아내면 constructor를 통해 알 수 있다.
*/

//ex)
function A() {}

let testObj = new A();

console.log(testObj.constructor); //function A(){}를 가리킴
console.log(A.prototype.__proto__); //최상위 object

console.log("------------------------------------------------");
//testObj 인스턴스가 A로 생성된 것인지 판별  -> instanceof //이항 연산자
const testObj2 = {
    name: "홍길동",
    age: 20,
};

console.log(testObj instanceof A); //true
console.log(testObj2 instanceof A); //false
console.log(testObj2 instanceof Object); //true

/*
    정리

    instanceof연산자는 특정 객체가 그 객체와 연결된 즉, 프로토타입 체인에 연결되어 있는지 체크하는 방법중 하나.
    isPrototypeOf()메서드 이용 방법도 있다.
*/
