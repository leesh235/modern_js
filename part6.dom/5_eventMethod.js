/**
 * onclick vs addEventListener
 *
 * -onclick
 *      하나의 콜백 함수(리스터)만 지정해서 등록. -> DOM초기부터의 메서드 -> 호환성이 좋음.
 * -addEventListener
 *      거의 대부분의 모던 브라우저가 지원-> 여러개의 이벤트 리스너를 등록하여 처리. -> 모던 자바스크립트로 넘어가면서 새롭게 추가된 메서드.
 */

//onclick -> 클릭시 구현될 기능만 충실히 수행.
//다른 이벤트 핸들러가 있을 시 -> 기본 이벤트 핸들러를 덮어씀.
// window.onload = () => {
//     const elem = document.getElementById("btn");

//     //두번째 리스너에 의해 실해되지 않음
//     elem.onclick = function () {
//         alert("클릭 1");
//     };
//     //실행!
//     elem.onclick = function () {
//         alert("클릭 2");
//     };
// };

//addEventListener -> 여러 이벤트 등록이 가능하여 각각 함수가 수행. 덮어쓰지 않음.
//거의 모든 브라우저가 지원 -> 메서드를 사용하여 객체나 요소에 이벤트 리스너를 전달.
//3번째 파라미터 값으로 버블링, 캡처링등의 사용여부를 설정할 수 있다. -> 기본 false.
//false설정 시 버블링 동작 -> 이벤트가 발생한 요소에서 window까지 이벤트를 전파(propagation).
//                         -> 자식객체에서 부모객체로 즉, 상위로 전파.
//                          ex) <div event> <p>~~</p> </div>, p태그 클릭 시 div의 event handler로 전달됨.(버블링)
//true설정 시 캡처링 동작  -> 부모객체에서 자식객체로 전달.
//event.stopPropagation -> 다음 캡처링이나 버블링을 멈춤.

// window.onload = () => {
//     const elem = document.getElementById("btn");

//     //먼저 실행된다.
//     elem.addEventListener("click", function () {
//         alert("클릭 1");
//     });
//     //앞의 이벤트 핸들러가 실행된 후 실행된다.
//     elem.addEventListener("click", function () {
//         alert("클릭 2");
//     });
// };

/**
 * 정리
 *
 * 구버전의 브라우저(IE같은) 지원 등의 호환성을 고려해야하는 상황이라면 -> onclick 메서드 사용.
 * 굳이 그럴 필요가 없다면 -> 모던한 addEventListener메서드를 사용.
 */

/**
 * stopPropagation
 */
window.onload = () => {
    const elem = document.getElementById("btn");
    //btn클릭 시 자신의 이벤트 핸들러와 상위의 이벤트 핸들러가 실행
    elem.addEventListener(
        "click",
        function (event) {
            alert("클릭 1");
            //이벤트의 전파를 막는다.
            event.stopPropagation();
        },
        false
    );

    const elem2 = document.getElementById("btn2");
    //btn2 클릭시에만 실행
    elem2.addEventListener(
        "click",
        function () {
            alert("클릭 2");
        },
        false
    );
};
