/**
 * 자바스크립트의 이벤트 동작 방식과 이벤트 대상 얻기
 */

window.onload = () => {
    //1. 버튼이 사용자의 행위에 의해 클릭되었는지 확인하기 -> 이벤트 발생의 신뢰 -> isTrusted
    const btn = document.querySelector("button");
    btn.addEventListener("click", addMouseEvent);

    function addMouseEvent(e) {
        console.log(e);
        //isTrusted 속성 -> 이벤트가 사용자행위에 의하여 발생 되었으면 true로 신뢰할 수 있고,
        //                  아니면 스크립트나 이벤트를 자동으로 실행시키는 메서드 등에 의해서 실행되었다면 false.

        const bool = e.isTrusted;
        if (bool) {
            console.log(bool + " --> 신뢰 O");
        } else {
            console.log(bool + " --> 신뢰 X");
        }
    }

    //isTrusted속성 값이 false가 되는 경우 --> 스크립트에 의한 도는 dispatchEvent()메서드에 의해서 자동 실행되면 -> false
    const event = new Event("click");
    elem.dispatchEvent(event);

    //dispatchEvent 메서드 -> 이벤트를 실행시키다, 처리하다, 보내다, 발송하다 라는 뜻.
    //                        html 페이지를 실행시키자마자 자동으로 이벤트가 실행되므로 -> isTrusted속성 값이 false.

    /**
     * 버블링, 캡처링
     *
     * addEventListener 3번째 파라미터 -> 기본은 false, 버블링 -> true면 캡처링
     */
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
        span.addEventListener(
            "click",
            function (e) {
                console.log(e.currentTarget.id);
                console.log(e.currentTarget.className);
            },
            true //보통은 버블링으로 동작, 디폴트가 버블링.
        );
    });
};
