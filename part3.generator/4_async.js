/*
    비동기 처리: callback, promise, async-await, generator 등
*/

/*
    callback

    depth가 깊어질수록 가독성이 좋지 않음
*/

//1
// setTimeout(
//     (x) => {
//         let result = x;
//         console.log(result); //10
//         //2
//         setTimeout(
//             (x) => {
//                 result *= x;
//                 console.log(result); //200
//                 //3
//                 setTimeout(
//                     (x) => {
//                         result *= x;
//                         console.log(result); //6000
//                         //4
//                         setTimeout(
//                             (x) => {
//                                 result *= x;
//                                 console.log(result); //240000
//                             },
//                             1000,
//                             40
//                         );
//                     },
//                     1000,
//                     30
//                 );
//             },
//             1000,
//             20
//         );
//     },
//     1000,
//     10
// );

/*
    promise

    1. new Promise() 호출하면 -> 대기(pending) 상태
    2. 콜백 함수를 선언 -> 인자는 resolve, reject
    3. 콜백 함수 처리 후 -> resolve 메서드 호출 -> 이행(fullfilled) 상태
    4. 성공하면 리턴값을 then()이 받아서 계속 처리 수행
*/
// new Promise((resolve, reject) => {
//     setTimeout(
//         (x) => {
//             let result = x;
//             console.log(result);
//             resolve(result);
//         },
//         1000,
//         10
//     );
// })
//     .then((result) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(
//                 (x) => {
//                     result *= x;
//                     console.log(result);
//                     resolve(result);
//                 },
//                 1000,
//                 20
//             );
//         });
//     })
//     .then((result) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(
//                 (x) => {
//                     result *= x;
//                     console.log(result);
//                     resolve(result);
//                 },
//                 1000,
//                 30
//             );
//         });
//     })
//     .then((result) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(
//                 (x) => {
//                     result *= x;
//                     console.log(result);
//                     resolve(result);
//                 },
//                 1000,
//                 40
//             );
//         });
//     });

/*
    generator
*/

//generator 주의사항
// function* testGen() {
//     const a = yield 1; // a에 yield 뒤의 값이 할당되는 것이 아니라 외부에서 입력된 값을 할당하는 것.
//     console.log(a);

//     const b = yield 2;
//     console.log(b);

//     const c = yield 3;
//     console.log(c);

//     const d = yield 4;
//     console.log(d);
// }

// const iter = testGen();
// iter.next(); //아무것도 출려되지않음, console전에 정지함
// iter.next(); //undefined, next()만 호출하면 a에 아무값도 전달되지 않는다.
// iter.next(202);

//실습
const calc = (x, y) => {
    setTimeout(() => {
        iter.next(x * y);
    }, 1000);
};

function* testGen() {
    const a = yield calc(1, 10);
    console.log(a);

    const b = yield calc(a, 20);
    console.log(b);

    const c = yield calc(b, 30);
    console.log(c);

    const d = yield calc(c, 40);
    console.log(d);
}

const iter = testGen();
iter.next();
