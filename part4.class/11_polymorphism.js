/*
    다형성

    -다양한 형태를 가지는 성질.
    -어떤 기능이나 동작을 구현 시, 설계적인 부분과 구현(동작/기능)되는 부분을 분리. -> 객체별로 다양하게 사용할 수 있게 하는 것.
    -부모클래스를 상속받은 자식클래스의 인스턴스 별로 적절한 메서드를 사용하게 하는 것.
    -즉, 설계부분과 구현부분은 1:N관계 성립
    -부모가 설계해놓을 것을 자식이 받아서 설계대로 구현한 후 각 인스턴스별로 다양하게 사용하는 것.
    -전통적인 OOP언어와는 다르게 강제가 아님. 문법적으로 지원하지 않음.
        다른 전통적인 언어들의 클래스와 ES6클래스의 차이점.
        이러한 다형성을 지원할 수 있는 문법적인 기반이 안되어 있음. -> 인터페이스,추상클래스,타입에 대한 개념.
        따라서, ES6클래스에서는 다형성을 전통적인 언어들에서와 같이 문법적인 측면에서 구현하기는 조금 어렵다. -> 흉내내기.
*/

/*
    for...of 반복 vs toString()메서드

    -또 다른 다형성의 한 예.
    -for...of
        1.다양한 자료구조에서 사용할 수 있다. -> 반복 가능한 객체(array.string, map, set...)
        2.반복문 내에서 배열이나 문자열에서 동작하는 특정 인터페이스가 지원되는 자료구조를 사용하기 때문.
        3.컬렉션 객체가 [Symbol.iterator]속성을 가지고 있어야만 가능.
        4.사용자 정의 객체의 경우에도 이러한 특정 인터페이스 규격을 맞춰준다면 사용가능.

    -toString()
        1.모든 객체에는 객체를 텍스트 형식으로 출력시키고자할 때 자동으로 호출되는 toString()메서드가 존재.
        2.즉, 객체를 나타내는 문자열을 반환.->object에서 파생된 모든 객체에 상속.
        3.이 메서드가 사용자 정의 객체에서 재정의되면 해당 재정의된 toString()메서드가 적용.
*/

//for...of
//array
const fruit = ["apple", "banana", "pear", "watermelon", "orange"];
for (let value of fruit) console.log(value);

//string
const str = "korea";
for (let i of str) console.log(i);

//number -> 반복 가능한 것이 아니므로 error!
// const num = 12345;
// for (let i of num) console.log(i);

//map
const map1 = new Map([
    ["seoul", 1],
    ["pusan", 2],
    ["jeju", 3],
]);
for (let city of map1) console.log(city);
for (let [key, value] of map1) console.log(key, value);

//toString()
//Date()
const dateObj = new Date(2030, 5, 25, 20, 40, 8);
strObj = dateObj.toString();
console.log(strObj);
console.log(typeof strObj); //string

//array
const arrObj = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrObj.toString());
console.log(typeof arrObj.toString()); //string

//object
const obj = new Object();
console.log(obj.toString()); //[object Object]
console.log(typeof obj.toString()); //string
console.clear();

//toString()메서드 재정의
function Person(name, age, hp, gender) {
    this.name = name;
    this.age = age;
    this.hp = hp;
    this.gender = gender;
}

const p1 = new Person("홍길동", 20, "010-1234-5678", "남성");
console.log(p1.toString()); //[object Object]

//재정의
Person.prototype.toString = function () {
    let result = `객체정보 --> 이름:${this.name}, 나이:${this.age}, 핸드폰:${this.hp}, 성별:${this.gender}`;
    return result;
};
console.log(p1.toString()); //`객체정보 --> 이름:홍길동, 나이:20, 핸드폰:010-1234-5678, 성별:남성`
console.clear();

String.prototype.getLength = function () {
    return this.length;
};

String.prototype.toString = function () {
    return `나의 좌우명 --> ` + this.valueOf();
};

let testObj = new String("일단 해보고 안되면 다시 또 해보자!");

// console.log(testObj.getLength()); //20
// console.log(testObj); //일단 해보고 안되면 다시 또 해보자!
// console.log(testObj.toString()); //나의 좌우명 --> 일단 해보고 안되면 다시 또 해보자!

//new String()을 사용하면 바로 toString()메서드를 사용한 것처럼 나옴.
// alert(testObj);
console.clear();

/*
    다형성 예1 -> class

    -다형성을 구현하기 위한 기본적인 OOP문법.
        1.부모/자식간의 계층적인 구조 -> 상속관계.
        2.메서드 재정의 -> 오버라이딩.
        3.재정의된 메서드 호출 -> 프로토타입 체이닝상에서 제일 먼저 찾게되는 메서드 호출.
*/

class Animal0 {
    constructor(name) {
        this._name = name;
    }
    bark() {
        return `짖다`;
    }
}

class Dog extends Animal0 {
    constructor(name, age) {
        super(name);
        this._age = age;
    }
    //자바스크립트에서는 굳이 재정의하지 않아도 된다.
    bark() {
        return `${this._age}살 짜리 ${this._name}가 짖다. -> 멍멍~`;
    }
}

class Cat extends Animal0 {
    constructor(name, age) {
        super(name);
        this._age = age;
    }
    bark() {
        return `${this._age}살 짜리 ${this._name}가 짖다. -> 야옹~`;
    }
}

class Bull extends Animal0 {
    constructor(name, age) {
        super(name);
        this._age = age;
    }
    bark() {
        return `${this._age}살 짜리 ${this._name}가 짖다. -> 음메~`;
    }
}

const d0 = new Dog("개", 2);
console.log(d0.bark()); //재정의하면 자식클래스 bark를, 하지 않았으면 부모클래스의 bark가 출력. 재정의가 강제되지 않음.

const c1 = new Cat("고양이", 4);
console.log(c1.bark());

const b1 = new Bull("소", 8);
console.log(b1.bark());
console.clear();

//array
const animals = [new Dog("개", 2), new Cat("고양이", 4), new Bull("소", 8)];
for (let v of animals) console.log(v.bark());
console.clear();

/*
    다형성 예2 -> function + prototype 기반

    -다형성을 구현하기 위한 기본적인 OOP문법.
        1.부모/자식간의 계층적인 구조 -> 상속관계.
        2.메서드 재정의 -> 오버라이딩.
        3.재정의된 메서드 호출 -> 프로토타입 체이닝상에서 제일 먼저 찾게되는 메서드 호출.
*/

//설계 클래스(인터페이스 역할)
//상속을 받은 자식 클래스에서 메서드가 미구현되었다면 여기서 에러를 던져준다. -> 그럼으로써 강제하는 효과를 준다.
const Animal = function (name) {
    this._name = name;
};
//자식클래스에서 여기까지 올라오면 error message 반환.
Animal.prototype.move = function () {
    throw new Error(`move 메서드가 구현되지 않았습니다.`);
};

//구현 클래스
//자식 클래스에서 move메서드를 구현하지 않으면 부모 클래스에서 에러를 던져줌으로써 구현을 강제하는 효과를 준다.
const DogImpl = function (name, age) {
    Animal.call(this, name); //class의 super 역할
    this._age = age;
};
DogImpl.prototype = Object.create(Animal.prototype);
DogImpl.prototype.constructor = DogImpl;

//재정의(오버라이딩)
DogImpl.prototype.move = function (args) {
    console.log(`${args}(${this._name}, ${this._age}살) 이동중...`);
    return "멍멍~~";
};

//객체 생성
const d1 = new DogImpl("바둑이", 2);
console.log(d1.move("개"));
console.log("-----------------------------------------------");

const d2 = new DogImpl("똥개", 4);
console.log(d2.move("개"));
console.log("-----------------------------------------------");
console.clear();

/*
    다형성 체크

    객체가 특정 클래스의 인스턴스인지 여부를 확인 -> instanceof
*/
console.log(d1 instanceof Object); // true
console.log(d1 instanceof Animal); // true
console.log(d1 instanceof DogImpl); // true
