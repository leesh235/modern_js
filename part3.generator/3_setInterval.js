/*
    setInterval(function,time)
*/

// const tid = setInterval(() => console.log("korea"), 1000); //1초마다 함수 실행

/*
    호출 스케줄링 취소(clearInterval)
*/

const myStop = (tid) => {
    clearInterval(tid);
};

// setTimeout(myStop, 5000, tid);
// setTimeout(myStop(tid), 5000); //myStop이 바로 실행된다.
// setTimeout(() => {
//     myStop(tid);
// }, 5000);

let cnt = 0;

// let tid = setInterval(() => {
//     console.log(tid);
//     cnt++;
//     if (cnt === 10) clearInterval(tid);
// }, 1000);

//ex) 2초 단위로 흘러가는 시계 만들기
function myClock() {
    let clock = document.getElementById("clock");
    let d = new Date();
    clock.innerText = `현재 시간은 ${
        d.getMonth() + 1
    }월 ${d.getDate()}일 ${d.getHours()}시 ${d.getMinutes()}분 ${d.getSeconds()}초 입니다.`;

    setInterval(myClock, 2000);
}

window.onload = () => myClock();

// window.onload = setTimeout(() => {
//     myClock();
// }, 2000);

// window.onload = setInterval(() => {
//     myClock();
// }, 2000);
