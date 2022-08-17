/*
    객체 프로토타입 출력

    __proto__ vs Object.getPrototypeOf()
*/

function A() {}

let obj = new A();

console.log(obj.__proto__); // A()
console.log(Object.getPrototypeOf(obj)); // A()
console.log(obj.__proto__ === Object.getPrototypeOf(obj)); //true
