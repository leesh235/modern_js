/*
    Object.create 상속

    -클래스 문법 지원이 추가되기 이전에 자바스크립트에서 객체지향을 구현하기 위해 사용된 방식.
    -Object.create(부모객체.prototype) (==extends)
    -call() or apply() (==super)
    -내부 동작
        첫번째 인자로 들어온 해당 객체의 프로토타입 객체를 복제.
        복제된 것을 자식객체.prototype에 할당.
        자식객체.prototype.constructor에 자식 객체를 할당해서 연결고리를 맞춰준다.
        new 키워드를 통해서 인스턴스를 생성 시 자식 객체의 this가 부모 객체까지 전달되도록 해줘야한다. -> 부모객체.(call or apply)(this, 인자값)
    
                            null
                            최상위object
        부모f       <->     부모proto
        자식f       <->     부모proto복제

    정리
    class에서는 상속을 extends와 super를 통해서 구현하고 있다면,
    class 이전에는 위와같이 Object.create()와 prototype, call 등을 이용해서 구현하고 있다.
*/

//ex)
//부모 클래스
function ParentClass(name, age) {
    this.name = name;
    this.age = age;
}

ParentClass.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
};

//자식 클래스
function ChildClass(name, age, power) {
    ParentClass.call(this, name, age);
    this.power = power;
}

//Object.create()를 이용해 부모 클래스의 프로토타입 객체를 복제해 자식클래스.prototype에 할당한다.
ChildClass.prototype = Object.create(ParentClass.prototype);

//자식객체.prototype.constructor에 자식 객체를 할당해서 연결고리 형성
ChildClass.prototype.constructor = ChildClass;

ChildClass.prototype.move = function () {
    console.log(`${this.name} is moving`);
};

const b1 = new ChildClass("batman", 20, 900);
console.log(b1);
console.log(b1.name); //batman
console.log(b1.age); //20
console.log(b1.power); //900
b1.sayHello();
b1.move();
console.log("-----------------------------------------");

const s1 = new ChildClass("superman", 30, 1500);
console.log(s1);
console.log(s1.name);
console.log(s1.age);
console.log(s1.power);
s1.sayHello();
s1.move();
console.log("-----------------------------------------");

console.log(b1.__proto__); //복제된 부모클래스 prototype == 자식클래스의 prototype
console.log(b1.__proto__.__proto__); // 부모클래스 prototype
console.log(b1.__proto__.__proto__.__proto__); // 최상위 Object
console.log(b1.__proto__.__proto__.__proto__.__proto__); //null
