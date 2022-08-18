/*
    제네레이터란?

        -함수.
        -여러개의 값을 반환.(보통 한개거나 없음)
        -제네레이터 외부에서 실행되는 중간에 특정 부분에서 멈추고 값을 외부에서 받아 하나씩 반환
        -*를 붙임면 제네레이터 함수.
        -yield(양도, 양보)에서 멈췄다가 필요한 시점에서 재개.(함수 중간에 실행을 멈추고 제어권은 호출자에게 양도, 이후 호출자에 의해 다시 재개)

*/

//ex)
function* testGen() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

//호출하면 바로 실행되지 않고 이터레이터[iterator(it, iter)] 객체를 반환한다.
//내부적으로 next()라는 메서드를 가지게 된다.

const iter = testGen();
//next()가 실행될 때마다 처음 나오는 yield부분까지 실행하고 멈춤(제어권을 호출자에게 양도)
//yield에서 멈췄을 때 yield뒤의 값을 반환.
//만약 값이 없다면 undefined반환.
//결론: next()메서드 실행 -> 항상 value, done 2개의 속성을 가진 객체를 반환.
//{value: 1, done: false} value: yield값, done: 함수실행이 끝났으면 true, 아니면 false

console.log(iter.next()); //{value: 1, done: false}
console.log(iter.next()); //{value: 2, done: false}
console.log(iter.next()); //{value: 3, done: false}
console.log(iter.next()); //{value: 4, done: true}

console.log("-----------------------------------------------------");

/*
    외부 데이터 받기

    next()메서드와 yield가 중간에서 번걸아가면서 데이터를 주고 받는다.
    next()호출 -> yield까지 실행 -> 제어권을 함수 외부로 양도 -> yield뒤의 값 반환
*/

function* testGen2() {
    const a = yield 1;
    const b = yield a * 1;
    const c = yield b + 2;
    return a * b * c;
}

const iter2 = testGen2();

console.log(iter2.next()); //{value: 1, done: false}
console.log(iter2.next(100)); //{value: 100, done: false} a=100
console.log(iter2.next(48)); //{value: 50, done: false}  b=48
console.log(iter2.next(2)); //{value: 9600, done: true} c=2

/*
    정리

    제네레이터 함수와 이터레이터 객체의 next()메서드는 서로 데이터를 주고 받을 수 있다.
*/
