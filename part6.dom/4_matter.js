/**
 * 작은 이미지 클릭 시 큰 이미지로 변경하기
 */

//작은 이미지들 가져오기
const imgs = document.querySelectorAll(".small_img");
console.log(imgs);

//일반적인 for반복문 사용 -> 순회하면서 클릭시 속성 변경.
// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].onclick = function () {
//         console.log(this.dataset.image); //data-... 값을 가져옴. data-image로 했기 때문에 속성명은 image.
//         document.getElementById("big_img").src = this.dataset.image; //해당 태그에 image주소값을 줌. 작은 이미지 클릭 시 큰이미지로 이동.
//     };
// }

//NodeList객체의 forEach()메서드를 사용.
imgs.forEach((elem) => {
    elem.addEventListener("click", function () {
        document.getElementById("big_img").src = this.dataset.image;
    });
});
