/*
    자바스크립트 클래스

    -클래스의 지원
        기존에는 클래스 문법이 존재하지 않았다.
        프로토타입 체인으로 객체 지향 언어의 상속과 캡슐화 등의 OOP문법을 구현.
        자바스크립트는 클래스가 필요없는 프로토타입 반의 OOP(객체 지향)언어.

    -프로토타입 기반의 OOP문법의 어려움
        생소하다.

    -ES5,6을 거치면서 클래스 문법을 지원
        기존의 프로토타입 기반의 OOP문법이 없어지고 새로운 class문법을 지원하는 것은 아님.

*/

//ex)
class Person {
    //생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    testHello() {
        console.log(`Hi~${this.name}(${this.age})`);
    }
}

//객체 생성 -> 인스턴스 생성
const p1 = new Person("홍길동", 20);

// console.log(p1.name);
// console.log(p1.age);
// p1.testHello();

/*
    클래스와 프로토타입
*/

//클래스 타입 체크
console.log(typeof Person); //function

//function == object
function myMultiplication(a, b) {
    return a * b;
}

myMultiplication.ret = myMultiplication(10, 10); //속성 추가
console.log(myMultiplication.ret); //100

/*
    클래스 타입이 function인 이유

    -내부 동작
        1. Person이름의 함수를 생성.
        2. 이 함수의 본문은 class의 constructor를 그대로 가져온다. 없으면 빈 함수로 생성.
        3. 메서드는 같은 이름의 Person.prototype에 추가.
        4. 프로토타입 객체 쪽에 클래스내에 정의한 메서드들을 추가해놓은 것이기 때문에
           해당 클래스의 인스턴스가 생성되면 추가된 메서드를 자유롭게 이용할 수 있다.
        
        Person class                    Person prototype
                                        -클래스내에 정의된 메서드 추가
*/
