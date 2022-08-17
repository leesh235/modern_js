/*
    function내부와 객체간의 관계

    함수생성 후 실해되면...
    내부에서는 f함수자신과 자신과 같은 이름의 f프로토타입 객체 생성.
    f함수 맴버로 프로토타입 속성이 생성 -> 자신과 같은 이름의 f프로토타입 객체를 가르킴(참조). (__proto__)
    f프로토타입 객체는 constructor를 통해 f함수를 참조.
*/

//ex)
function Animal() {}
/*
    Animal 함수                                 Animal프로토타입 객체
    +prototype(프로토타입객체 참조)             +constructor(Animal함수 참조)
*/

let tiger = new Animal();
let lion = new Animal();
//new 연산자와 생성자 함수를 이용하여 객체 생성시 각 객체에 __proto__속성 자동 생성
//__proto__속성은 animal프로토타입 객체를 참조한다.
//animal프로토타입 객체도 __proto__속성이 존재하며 이것은 최상위 프로트타입 객체이다.

/*
    프로토타입 객체에 멤버추가
    함수자체에 메소드를 만드면 함수 생성시 매번 만들어져 메모리 낭비가 심해진다.
*/
Animal.prototype.aniRun = function () {
    return "동물이 뛴다";
};

// tiger.aniRun = function () {
//     return "타이거이 뛴다";
// };
//tiger함수 내의 aniRun이 실행되고 프로토타입까지 가지않는다

/*
    객체 생성시 생성자 안에서 메서드를 정의하면 안되는 이유
*/

//ex)
function Add(a, b) {
    this.a = a;
    this.b = b;
    this.plus = function () {
        return this.a + this.b;
    };
}

let add1 = new Add(100, 10);
let add2 = new Add(200, 10);
let add3 = new Add(300, 10);
console.log(add1);
console.log(add2);
console.log(add3);
//객체가 생성될 때마다 plus메서드가 계속 생성된다.(메모리 부하)
console.log("---------------------------------------------------------------");

function Add2(a, b) {
    this.a = a;
    this.b = b;
}
Add2.prototype.plus = function () {
    return this.a + this.b;
};

let newadd1 = new Add2(100, 20);
let newadd2 = new Add2(200, 20);
let newadd3 = new Add2(300, 20);
console.log(newadd1);
console.log(newadd2);
console.log(newadd3);
//프로토타입객체에 메소드를 정의하면 plus메서드가 계속 생성되지 않고 프로토타입객체에서 가져다 사용한다.
//메모리 부하를 방지할 수 있다.
