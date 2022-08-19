/*
    getOwnPropertyNames()

    -객체의 모든 특성을 보고자 한다면 getOwnPropertyNames() 메서드 사용.
    -정적 메서드 -> Object.getOwnPropertyNames(객체명).
                 -> Object.getPrototypeOf(객체명). 지정된 객체의 내부 prototype 속성값 반환.
*/

//ex)
const p1 = {
    eat() {},
    run() {},
    rest() {},
};

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {}
    run() {}
    rest() {}
}

const p2 = new Person2("홍길동", 20);

//클래스는 열거x
for (let i in p2) {
    console.log(i); //name, age
}
console.log("-----------------------------------");
console.log(p1);
console.log(p2); //메서드는 보이지 않음.

console.log("-----------------------------------");
console.log(Object.keys(p1)); //[eat,run,rest]
console.log(Object.getPrototypeOf(p2)); //지정된 객체의 내부 prototype속성값 반환.
console.log(Object.keys(Object.getPrototypeOf(p2))); //[], 클래스는 열거대상이 아닌 메서드를 보여주지 않음.

console.log("-----------------------------------");
console.log(Object.getOwnPropertyNames(p1)); //[eat,run,rest]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(p2))); //['constructor', 'eat', 'run', 'rest'], 클래스여도 메서드들이 출력됨.
