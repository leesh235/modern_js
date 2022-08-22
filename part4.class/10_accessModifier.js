/*
    접근 제한자

    자바스크립트에는 전통적인 다른 OOP에서와 같은 접근자(private, public, protected)가 없고 기본적으로 public이다.
    즉, 해당 클래스의 인스턴스를 통해 외부에서 항상 참조가 가능하다.
    생성자 메서드내에서 속성명 앞에 "_"를 임의로 붙여 private을 암묵적으로 표시.
    private -> 최신 브라우저 위주로 지원.
*/

//1.property(속성)
class Person0 {
    age = 20;
    power = 900;
    #finger = 10; //#을 붙여주면 private이 된다, 외부에서 직접 접근할 수 없다.
    #toe = 10;
}

const p0 = new Person0();
console.log(p0);
console.log(p0.age); //20
console.log(p0.power); //900
p0.age = 10;
console.log(p0.age); //10
console.log("--------------------------------------------------------");

console.log(p0.finger); //undefined
// console.log(p0.#finger); //private error

console.clear();

//2.method
class Animal {
    #age = 4;
    //클래스 내부에서는 접근가능.
    bark() {
        this.#age = 8;
        return `${this.#age}살 짜리 개가 짖고 있다.`;
    }
}

const ani1 = new Animal();
console.log(ani1.bark());
console.clear();

//3.private method
class Animal2 {
    #age = 4;
    bark() {
        this.#age = 8; //클래스 내부에서는 접근가능.
        return `${this.#age}살 짜리 개가 짖고 있다.`;
    }
    #privateMethod() {
        return `Hello, Private method`;
    }
    //해당 메서드를 통해 private메서드를 호출한다.
    getPrivateMethod() {
        return this.#privateMethod();
    }
}

const ani2 = new Animal2();
// console.log(ani2.#privateMethod()); //private error
console.log(ani2.getPrivateMethod());
console.clear();

//4.private static method
class Animal3 {
    static #privateStaticMethod() {
        return `Hello, Private Static Method`;
    }

    static getPrivateStaticMethod() {
        return this.#privateStaticMethod();
    }
    static getPrivateStaticMethod_ClassName() {
        return Animal3.#privateStaticMethod();
    }
}

// console.log(Animal3.#privateStaticMethod()); //private error
console.log(Animal3.getPrivateStaticMethod());
console.log(Animal3.getPrivateStaticMethod_ClassName());
console.clear();

/*
    getter, setter

    getter
        -클래스 속성에 접근하여 값을 가져오고자 할 때 사용.
        -해당 메서드명 앞에 get키워드를 붙여서 사용.
        -메서드 사용 시 마치 속성처럼 사용. -> getter는 호출X(메서드() X, 메서드명만 사용)
        -기본적으로 값을 가져오는 용도 -> 반드시 어떤 값을 return.

    setter
        -클래스 속성에 값을 할당할 때 사용.
        -메서드명 앞에 set키워드를 붙여서 사용.
        -마치 속성처럼 사용.
*/

//getter
class Person {
    age = 100;
    constructor(id, name, email) {
        this._id = id;
        this._name = name;
        this._email = email;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    set id(value) {
        this._id = value;
    }
    set name(value) {
        this._name = value;
    }
    set email(value) {
        this._email = value;
    }
    info() {
        return `ID: ${this._id}, NAME: ${this._name}, EMAIL:${this._email}`;
    }
}

//getter
const p1 = new Person("batman", "배트맨", "batman@gamil.com");
console.log(p1.age); //100
// console.log(p1.name()); //error, getter는 메서드명만 사용, 호출X
console.log(p1.name); //배트맨
console.log(p1.info());

p1._name = "슈퍼맨"; //암묵적인 private표시라 외부에서 변경가능.
console.log(p1.info());
console.clear();

//setter
const a1 = new Person("antman", "앤트맨", "antman@gamil.com");
console.log(a1.age); //100
a1.age = 200;
console.log(a1.age); //200

console.log(a1.id); //antman
a1.id = "aaaaaaaaaaaaaaaaantman";
console.log(a1.id); //aaaaaaaaaaaaaaaaantman

console.log(a1.name); //앤트맨
a1.name = "개미맨";
console.log(a1.name); //개미맨

console.log(a1.email); //antman@gamil.com
a1.email = "aaaaaaaaaaaaaaaaantman@gamil.com";
console.log(a1.email); //aaaaaaaaaaaaaaaaantman@gamil.com
