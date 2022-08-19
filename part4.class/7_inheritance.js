/*
    상속

    -부모가 가진 자원을 그대로 상속받아 자식 클래스를 생성 및 확장.
    -extends 키워드 사용.
    -부모로부터 물려받은걸 그대로 사용해도 되고, 자식이 재정의해서 사용하는 것도 가능.
*/

//ex)
////부모 클래스
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return this.name + " 먹다.";
//     }
// }

//// 자식 클래스, 상속
// class Tiger extends Animal {
//     //자식 클래스에서 eat() 메서드 재정의.
//     eat() {
//         return this.name + " 빨리 먹다.";
//     }
// }

// const t1 = new Tiger("호랑이", 2);
// console.log(t1.name);
// console.log(t1.age);
// console.log(t1.eat());

/*
    상속과 super

    보모/상위/super 클래스, 자식/하위/sub 클래스
    부모 클래스의 constructor는 자식 클래스에서 super를 통해서 받는다.
    자식 클래스의 생성자 메서드 내에서 부모클래스의 생성자를 호출해줘야 한다.
*/

//ex)
class Animal {
    constructor(group) {
        this.group = group;
    }
    getGroup() {
        return this.group;
    }
    eat() {}
    sleep() {}
    bark() {
        return `짖다.`;
    }
}

class Mammal extends Animal {
    constructor(name, finger, toe, eyesight) {
        super(Mammal.name); //부모 클래스의 생성자 호출, this보다 super가 먼저 호출되어야 함.
        this.name = name;
        this.finger = finger;
        this.toe = toe;
        this.eyesight = eyesight;
    }
    run() {
        return `${this.name}(${this.group}) 뛴다.`;
    }
    bark() {
        return `${this.name} 크게 짖다.`;
    }
    move() {
        return `${this.name} 이동하면서 ${super.bark()}`; //부모 클래스에 있는 bark()가 호출됨.
    }
}

const mam1 = new Mammal("호랑이", 10, 10, 1.5);
console.log(mam1.getGroup()); //undefined, 부모 클래스의 생성자에 값을 넣지 않아서 undefined가 출력된다.
console.log(mam1.name); //error, 자식 클래스의 생성자 메서드 내에서 부모클래스의 생성자를 호출해줘야 한다.
console.log(mam1.run()); //자식 클래스 메서드
console.log(mam1.bark()); //재정의(override), 자식 클래스에서 찾아보고 있으면 사용, 없으면 부모 클래스에서 찾는다.
console.log(mam1.move());

//속성 출력
console.log(Object.getOwnPropertyNames(mam1)); //group, name, finger, toe, eyesight
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(mam1))); //constructor, run, bark, move
