//심볼은 new 연산자를 사용하지 않음
//괄호안 문자열은 단순 디버깅 용도이거나 설명일뿐 고유값을 가지는데 어떤 영향을 주지 않는다(비워도되고 생성해도 아무 상관없다)
let symbol = Symbol();

/*
    심볼의 출력 형태
    심볼은 문자열 형태로 변환 불가 -> console.log로 콘솔 출력가능
*/
let symbol5 = Symbol("age");
// console.log(symbol5); //Symbol(age)

// for in 구문으로 출력되지 않음
let arr = [1, 2, 3, 4, 5];
arr.someProperty = 10;
for (let i of arr) console.log(i); //0 1 2 3 4 someProperty

let arr2 = [1, 2, 3, 4, 5];
let someProperty2 = Symbol();
arr2[someProperty2] = 10;
for (let i of arr2) console.log(i); //0 1 2 3 4,  symbol은 은닉성이 보장된다

/*
    정리
    배열 객체에 어떤 속성을 넣고자 한다면 그리고 동시에 반복문에서 속성을 나타나지 않고자 한다면(속성을 은닉화 하고자 한다면)
    심볼을 사용할 수 있다.
 */
