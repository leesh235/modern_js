/*
    spread 연산자(이터러블 객체의 요소를 하나씩 분리하여 전개)
*/
let testArr = ["k", "o", "r", "e", "a"];
console.log(...testArr);
console.log([...testArr]);

let testArr2 = "hello";
console.log(...testArr2);
console.log([...testArr2]);
console.log([..."hello"]);

//set도 가능
let ar = new Set().add("X").add("Y");
console.log(...ar);
console.log([...ar]);
