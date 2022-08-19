/*
    생성자 메서드

    -생성자 메서드는 인스턴스를 생성할 때 제일 먼저 실행되는 메서드이다.
    -주로 생성되는 객체의 초기화를 담당한다.
    -클래스내에 constructor라는 이름을 가진 생성자 메서드는 오직 하나여야만 한다. -> 2개 이상이면 error.
*/

//ex)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //2개 이상을 작성하면 error 발생.
    // constructor(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
}

const p1 = new Person("홍길동", 20);
console.log(p1.name);
console.log(p1.age);

//생략
//생략가능 하다. constructor(){}를 생성한 것과 동일.
//생성된 객체에 어떤 속성을 추가하려면 객체를 생성한 이후에 별도로 속성을 추가.
//객체 생성시 초기화를 해야한다면 생략하면 안된다.
//ex)
class Animal {
    //constructor(){} 를 쓴 것과 동일.
}

const ani1 = new Animal();
//별도로 속성 추가.
ani1.name = "악어";
ani1.age = 4;
console.log(ani1.name);
console.log(ani1.age);
