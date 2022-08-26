/**
 * 이벤트 위임과 활용(event delegation)
 *
 * -동적으로 생성되는 tag에 이벤트 핸들러를 등록할 수 있다.
 *
 * event.target vs event.currentTarget
 *
 * -event.target -> 최하위 객체, 자식 요소 반환
 * -event.currentTarget -> 부모 요소 반환
 */

window.onload = () => {
    //[1]
    // const lis = document.querySelectorAll("li");
    // lis.forEach((ele) => {
    //     ele.addEventListener("click", function (e) {
    //         console.log("이미지가 클릭되었습니다.");
    //         console.log("---------------------------------------");

    //         console.log(e.target); //img
    //         //이벤트가 일어날 (자식)객체를 의미.
    //         //즉, 이벤트 버블링의 가장 끝단에 위치한 마지막 요소를 반환 -> 클릭한 요소, 자식 객체.
    //         //이미지 자체를 클릭한 것이므로 -> img태그가 타겟이고 이것을 반환.

    //         console.log(e.currentTarget); //li
    //         //이벤트가 위임된 부모의 객체를 반환.
    //         //즉, 이미지 태그의 부모격인 li요소를 반환.
    //     });
    // });

    //[2]
    //새로운 동물을 동적으로 추가하게 된다면?

    const memberList = document.querySelector(".memberList");

    //event delegation(이벤트 위임)
    function getEventTarget(e) {
        e = e || window.event;
        return e.target;
    }

    memberList.addEventListener("click", function (event) {
        console.log("이미지 클릭되었습니다.");
        // console.log(event.currentTarget); //ul
        // console.log(event.target); //img
        const t = getEventTarget(event);
        console.log(t.id);
        console.log(t.className);
    });

    const liNode = document.createElement("li");
    const txtNode = document.createTextNode("추가 동물 호랑이");
    const imgNode = document.createElement("img");

    //img 엘리먼트 속성추가
    imgNode.src = "../image/ex4.jpg";
    imgNode.id = "호랑이";
    imgNode.class = "ddd";
    imgNode.width = "100";
    imgNode.height = "100";

    //붙이기
    liNode.appendChild(imgNode);
    liNode.appendChild(txtNode);
    memberList.appendChild(liNode);

    //동적으로 등록된 li 태그에는 event handler가 등록되지 않는다.
    //부모격인 ul 태그에 event handler 등록하면 문제 해결
};
