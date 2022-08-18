/*
    setTimeout vs setInterval

    비동기 처리에는 다양한 방법들이 존재 -> promise, generator

    -호출 스케쥴링 함수 -> setTimeout, setInterval
        -setTimeout
            일정시간 "후에" 함수를 한번만 실행
            clearTimeout
        -setInterval
            일정시간"마다" 함수를 주기적으로 실행
            clearInterval
*/

/*
    setTimeout(function,time,paramter)
*/

//ex1)
function testHello() {
    console.log("Hello~");
}

testHello(); //그냥 호출
setTimeout(testHello, 2000); //지연 호출

//ex2)
function testHello2(t) {
    console.log(t);
}
setTimeout(testHello2, 3000, "hello world~");

//ex3)
setTimeout((a) => console.log(a), 4000, "안녕하세요");

//ex4)
// setTimeout(console.log("aaaa"), 5000); //함수가 아니기 때문에 바로 aaaa가 출력된다

/*
    호출 스케줄링 취소(clearTimeout)

    setTimeout 호출 -> 타이머 식별자 반환.
*/

const ti = setTimeout((a) => console.log(a), 2000, "aaa");
console.log(ti); // 5, 위에 setTimeout 4개가 있으므로 5

clearTimeout(ti); //ti 실행안됨
