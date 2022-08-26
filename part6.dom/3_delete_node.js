/**
 * node 삭제
 */

// 첫번째 방식
// window.onload = () => {
//     document.getElementById("btn").addEventListener("click", function () {
//         //부모 엘리먼트 가져오기
//         let memList = document.getElementById("memberList");
//         //삭제할 자식 엘리먼트 가져오기
//         let p1 = document.getElementById("p1");
//         //부모로부터 자식 삭제
//         memList.removeChild(p1);
//     });
// };

//두번째 방식
// window.onload = () => {
//     document.getElementById("btn").addEventListener("click", function () {
//         //삭제할 자식 엘리먼트 가져오기
//         let p1 = document.getElementById("p1");
//         //부모 엘리먼트 찾아서 삭제하기
//         p1.parentNode.removeChild(p1);
//     });
// };

/**
 * li엘리먼트의 특정 문자열로 li요소 삭제하기
 *
 * -li의 문자열로 해당 요소 삭제.
 */

//1.함수 만들기
function removeElementByText(text) {
    const li = document.querySelectorAll("li");
    console.log(li); //node list 객체를 반환
    //자바스크립트에서 element배열을 다룰 시 -> querySelectorAll은 NodeList객체를 반환.(배열과 차이점이 있다.)
    //NodeList객체의 프로토타입 메서드 -> forEach메서드를 이용하여 순회하면서 각 엘리먼트를 비교하여 조건 처리.
    //모던 브러우저의 경우는 대부분 지원 -> IE는 지원X.
    //브라우저 API -> JS에서도 호출해서 사용 가능.
    //array와 가장 큰 차이점 -> NodeList는 자바스크립트API가 아니고 브라우저가 제공하는 API.

    //전개 연상자를 사용하여 JS 배열로 받기
    const li2 = [...document.querySelectorAll("li")];
    console.log(li2); //배열 객체로 반환

    //NodeList객체와 Array객체의 차이점
    //1.배열의 길이에 대한 정보를 가진다. -> length속성.
    console.clear();
    console.log("----------------------------1");
    console.log(li.length);
    console.log(li2.length);
    //2.item()메서드(NodeList)
    console.log("----------------------------2");
    console.log(li.item(0)); //=== arr[0], 배열과 유사한 부분
    console.log(li.item(0).innerText); //홍길동
    console.log(li2[2]);
    console.log(li2[2].innerText); //강감찬
    //3.참조를 벗어날 때
    console.log("----------------------------3");
    console.log(li.item(4)); //null
    console.log(li2[4]); //undefined
    // for (let value of li) console.log(value);

    li.forEach((elem) => {
        if (elem.innerText === text) {
            elem.parentNode.removeChild(elem);
        }
    });
}

//2.함수 호출
document.getElementById("btn").addEventListener("click", function () {
    removeElementByText("을지문덕");
});
