/*
    2가지 방식

    -생성자 함수
    -class
*/

//생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function () {
    console.log("안녕~!");
};

const p1 = new Person("홍길동", 20);
console.log(p1.name);
p1.say();

//class
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log("안녕~!");
    }
}

const p2 = new Person2("이순신", 30);
console.log(p2.name);
p2.say();

/*
    정리

    -클래스는 기본적으로 엄격모드(stric) 자동 적용.
    -클래스 메서드는 열거 대상이 아님(for in). -> 클래스와 같은 이름의 프로토타입 객체의 속성에 추가된 메서드들 열거 X.
*/

//열거 ex)
//생성자 함수
for (let i in p1) {
    console.log(i); //name, age, say
}

//클래스, 메서드가 열겨되지 않음
for (let i in p2) {
    console.log(i); //name, age
}
