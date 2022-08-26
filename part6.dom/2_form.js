/**
 * 사용자 입력폼과 노드 추가
 *
 * -버튼 클릭 시 사용자 이름과 홈페이지 주소가 바디에 추가
 */

window.onload = () => {
    document.getElementById("btn").addEventListener("click", function () {
        //사용자 입력 값
        const user_name = document.getElementById("user_name");
        const user_home = document.getElementById("user_home");
        console.log(user_name.value, user_home.value);

        //a태그 생성
        let aTagNode = document.createElement("a");
        aTagNode.href = user_home.value;

        //텍스트 노드 생성
        let txtNode = document.createTextNode(user_name.value);

        //텍스트 노드를 a태그에 붙이기
        aTagNode.appendChild(txtNode);

        //리스트에 붙이기
        let memList = document.getElementById("memberList");
        let br = document.createElement("br");
        memList.appendChild(aTagNode);
        memList.appendChild(br);

        //input 초기화
        user_name.value = "";
        user_home.value = "";
    });
};
