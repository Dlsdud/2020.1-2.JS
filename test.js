/* 
허봉식 교수님 보강 영상 코드
----------------------------------------------
function getRandom() {
    //Math.random() 함수 사용해보기
    let num = Math.random() * 100;
    num = Math.ceil(num) * 1000;
    document.querySelector("#amount").value = num;
}

window.onload = function () {
    document.querySelector("#setAmount").addEventListener("click", getRandom);
}

*/

//----------------------------------------------------------------

//세자리 숫자마다 쉼표 추가하기
$.fn.digits = function () {
    return this.each(function () {
        $(this).val($(this).val().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
}

//랜덤값 불러오기
$(document).ready(function() {
    $("#setAmount").click(function() {
        let num = Math.random() * 100;
        num = Math.ceil(num) * 1000;
        $("#amount").val(num).digits();
    });
});

//----------------------------------------------------------------

// .replace(/(\d{3})(\d{4})(\d)/, "$1-$2-$3");

//   .replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3")

//버튼클릭시 input에 입력
function touchNumberButton() {
    $("#tel").val($("#tel").val());

}
    
$(document).ready(function() {
    //버튼의 이벤트 핸들러를 등록한다.
    $(".btn").click(touchNumberButton).replace(/(\d{3})(\d{4})(\d)/, "$1-$2-$3");
});
