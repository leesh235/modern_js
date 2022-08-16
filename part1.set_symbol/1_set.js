/*
    -ES6 set() 자료 구조

    ES6에서 새롭게 도입한 데이터 자료구조 --> map, set
    map은 key와 value 한쌍, set은 중복을 허용하지 않는 특징이 있음

    -set

    set => 집합 => value들의 집합, 컬렉션
    배열과 유사하지만 중복된 값을 가질 수 없다
*/

// 생성
let ar3 = new Set(); //비어있는 set을 하나 생성

//추가
ar3.add("A");
ar3.add("B");
ar3.add("C");
// console.log(ar3[0]); // 배열과 다름

//사이즈
// console.log(ar3.size);

//삭제
ar3.delete("C");

//전체 삭제
ar3.clear();

//생성 시 추가
let ar = new Set().add("X").add("Y");
