/*
    set 자료구조- 반복
*/
let ar = ["a", "b", "c", "d", "e"];

//전통
for (let i = 0; i < ar.length; i++) {
    // console.log(ar[i]);
}

console.log("-------------------------------------");

//forEach
ar.forEach((val) => {
    // console.log(val);
});

/*
    set 메서드 --> keys(), values()
*/
let testSet3 = new Set(["tiger", "lion", "dog", "cat", "hippo"]);

//for of 사용 가능(for in은 undefined)
for (let i of testSet3) {
    // console.log(i);
}

//keys() --> iterator(반복자)객체를 반환 --> next()메서드
const key_itr = testSet3.keys();
// console.log(key_itr.next().value); //tiger

//values() --> iterator(반복자)객체를 반환 --> next()메서드
const val_itr = testSet3.values();
// console.log(val_itr.next().value); //tiger

/*
    entries() 메서드
    삽입순으로 set 각각의 요소들을 가져와 한쌍으로 만들어준다
*/
let testSet5 = new Set();

testSet5.add("홍길동");
testSet5.add("이순신");
testSet5.add("강감찬");

const entries = testSet5.entries();

for (let i of entries) {
    // console.log(i); //[value, value]
}
