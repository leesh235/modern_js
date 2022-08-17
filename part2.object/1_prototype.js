/*
    자바스크립트는 프로토타입 기반의 언어.
    객체의 프로토타입을 가지고 새로운 객체를 생성해가는 프로그래밍 방식.
    생성된 객체는 자기자신의 프로토타입을 갖는다.
    객체의 프로토타입을 이용하여 객체의 확장, 재사용, 상속등을 구현해나감.
    class는 기존에 없었다. 추후 문법적으로 지원.
*/

//ex)
const fruit = { name: "apple" };
// console.log(fruit.name);

//속성 추가
fruit.expiration = "20221212"; // === fruit[expiration] = "20221212"
console.log(fruit.expiration);

//속성 유무 체크 hasOwnProperty()
console.log(fruit.hasOwnProperty("expiration"));

//hasOwnProperty()메서드 사용가능 이유
console.log(fruit); // __proto__: 부모객체

//hasOwnProperty를 정의해버리면 부모객체까지 갈 필요없이 정의한 hasOwnProperty를 사용
const fruit2 = {
    name: "apple",
    expiration: "20221212",
    hasOwnProperty: () => {
        console.log("hi");
    },
};
fruit2.hasOwnProperty();
