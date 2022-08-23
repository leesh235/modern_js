//li리스트 태그에서의 클로저와 let
// const li = document.querySelectorAll("li");

//1.
// // for (var i = 0; i < li.length; i++) {
// for (let i = 0; i < li.length; i++) {
//     console.log(i);
//     li[i].addEventListener("click", () => console.log(i + "번째 요소입니다."));
// }
// //li태그를 클릭하면 모두 같은 값이 출력.
// //i값이 이벤트 콜백함수내에서 외부의 var로 선언되어져 있는 i를 참조하는게 문제.
// //재할당이 가능하면서 블록 스코프 변수인 let을 사용하면 문제 해결.

//2. 자동으로 리스트 만들기
const makeList = (ar) => {
    let el = "<ul>\n";

    for (let i = 0; i < ar.length; i++) {
        el += "<li>" + ar[i] + "</li>\n";
    }

    el += "</ul>";
    return el;
};

const animals = ["사자", "호랑이", "하마", "익어", "개", "고양이", "코끼리"];
const li_items = makeList(animals);
console.log(li_items);

document.body.innerHTML = li_items;

const li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", () => console.log(i + "번째 요소입니다."));
}
