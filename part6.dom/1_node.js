/**
 * 개요와 텍스트 노드
 *
 * DOM이란?
 * -document object model의 약자 -> 웹의 문서와 웹의 태그와 관련된 객체를 의미.(태그 == 노드 == 객체)
 * -HTML요소들의 구조화된 표현.
 * -DOM객체 구조는 노드 트리라고 표현. 부모 가지 -> 자식가지(element) -> 잎.
 * -이러한 DOM요소를 기반으로 브라우저가 해석하여 렌더링.
 *
 * 태그, 노드, 객체
 * -겨의 같은 개념.
 * -자바스크립트를 이용하면 직접 이러한 노드를 추가, 삭제하는 등의 DOM조작 작업을 할 수 있다. ->DOM을 배우는 궁극적인 이유!
 * -즉, 손으로 직접 태그를 입력하지 않아도 태그를 body태그안에 추가시킬 수 있다.
 *
 * ex)
 *                                                      <HTML>(root element)
 *                                  <head>                                             <body>
 *                                  (element)                                           (element)
 *
 *                      <meta>                  <title>                 <h1>            <p>             <ul>
 *                      (element)               (element)               (element)       (element)       (element)
 *
 *                                                                      text node       text node       <li>
 *                                                                                                      (element)
 */

/**
 *  텍스트 노드
 *
 * -생성하고자 하는 엘리먼트 요소를 생성 -> createElement(), 태그 생성
 * -원하는 텍스트를 변수에 저장 -> createTextNode()
 * -해당 객체에 붙여준다. -> appendChild()
 */

//ex)
// window.onload = () => {
//     //p element 생성
//     const eleNode = document.createElement("p");

//     //텍스트 노드 생성
//     const txtNode = document.createTextNode("Welcome to DOM");

//     //해당 객체에 붙여주기(텍스트 노드를 p element에 붙여주기)
//     eleNode.appendChild(txtNode);

//     console.log(txtNode) // <p>Welcome to DOM</p>

//     document.body.appendChild(eleNode);
// };

/**
 * 이미지 노드
 *
 * -img element 요소 생성. -> document.createElement("img");
 * -img element에 속성 추가. -> 두가지 방식, setAttribute() vs .속성
 * -해당 객체에 붙여준다. -> appendChild()
 */

//ex)
// window.onload = () => {
//     //img 엘리먼트 생성
//     const imgNode = document.createElement("img");

//     //생성한 이미지 엘리먼트에 속성 추가
//     imgNode.src = "asd";
//     imgNode.width = 400;
//     imgNode.height = 300;

//     console.log(imgNode); // <img src="asd" width=400 height=300 />

//     document.body.appendChild(imgNode);
// };

/**
 * setAttribute()
 *
 * 사용자 정의 속성을 직접 만들어서 추가하는 것이 가능.
 */

//ex)
// window.onload = () => {
//     //img 엘리먼트 생성
//     const imgNode = document.createElement("img");

//     //생성한 이미지 엘리먼트에 속성 추가
//     imgNode.setAttribute("src", "asd");
//     imgNode.setAttribute("width", 400);
//     imgNode.setAttribute("height", 300);
//     imgNode.setAttribute("addProperty", "obj1"); // 사용자 정의 속성

//     console.log(imgNode); // <img src="asd" width=400 height=300 addProperty="obj1"/>

//     document.body.appendChild(imgNode);
// };

/**
 * innerHTML vs innerText
 */

//ex) innerHTML
window.onload = () => {
    //img 엘리먼트 생성
    let strHtml = "";
    strHtml += "<h1> 제목: 하하하</h1>";
    strHtml += `<img src="asd" `;
    strHtml += "width=400 hieght=300 />";

    // document.body.innerText = strHtml; //태그까지 텍스트로 삽입됨
    document.body.innerHTML = strHtml;
};
