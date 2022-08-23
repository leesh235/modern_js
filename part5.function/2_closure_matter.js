//문) 1초 단위로 증가하는 클로저 카운터 구현

// const out = () => {
//     let cnt = 0;
//     let internal = () => ++cnt;
//     return internal;
// };

// const out2 = out();

// setInterval(() => console.log(out2()), 1000);

//문) 버튼 클릭시 클로저 카운팅
const btnView2 = document.getElementById("btnView");
const cntView2 = document.getElementById("cntView");

const out = () => {
    let cnt = 0;
    let internal = () => ++cnt;
    return internal;
};

const out2 = out();

btnView2.onclick = () => {
    cntView2.innerText = out2();
};
