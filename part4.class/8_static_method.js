/*
    정적 메서드(static method)

    1. 정적 메서드 구현방법은?
        -메서드 앞에 static 키워드 붙여주기 -> 따로 인스턴스를 생성하지 않아도 메서드 호출가능
        -인스턴스에 따라 달라지지 않는 고정된 메서드

    2. 정적 메서드가 호출가능할 때와 불가능 할때?
        -객체명.메서드 X -> 클래스명.메서드

    3. 인스턴스가 정적 메서드를 호출할 수 있는지?
        -기본적으로 인스턴스를 통해서 호출하는 것은 불가능
        -정적 메서드는 프로토타입이 아니라 class 내부에 존재 -> 객체명.constructor.정적메서드로 사용가능
*/

//ex)
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    sleep() {
        console.log("자다");
    }
    //정적 메서드
    static sleep2() {
        console.log("Zzz...");
    }
}

const ani1 = new Animal("호랑이");
ani1.sleep();
console.log(ani1.getName());
// ani1.sleep2();//error
Animal.sleep2(); //일반적인 정적 메서드 호출 방법
ani1.constructor.sleep2(); //인스턴스를 통해 정적 메서드를 호출하는 방법

console.clear();
/*
    상속관계에서의 정적 메서드
*/

//ex)
class Add {
    static plus(x) {
        x = x || 100;
        return x + 1000;
    }
}

class ChildAdd extends Add {
    static plus(x) {
        return super.plus(x) + super.plus(x) + super.plus(x);
    }
}

// console.log(Add.plus()); // 1100
// console.log(Add.plus(500)); // 1500
// console.log(ChildAdd.plus()); // 3300
// console.log(ChildAdd.plus(300)); // 3900
// console.log(ChildAdd.plus(30)); //3090

const add1 = new Add();
// console.log(add1.plus()) //error
console.log(add1.constructor.plus()); // 1100

const cadd1 = new ChildAdd();
// console.log(cadd1.plus()); //error
console.log(cadd1.constructor.plus()); // 1100
