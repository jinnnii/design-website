/*
div사이즈 동적으로 구하기
*/
const outer = document.querySelector('.inner-cont');
const innerList = document.querySelector('.cards');
const inners = document.querySelectorAll('.card');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

/*
버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector('.left');
const buttonRight = document.querySelector('.right');

buttonLeft.addEventListener('click', () => {
currentIndex--;
    currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
    innerList.style.marginLeft = `-${outer.clientWidth/2 * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});

buttonRight.addEventListener('click', () => {
    currentIndex++;
    currentIndex = currentIndex >= 1 ? 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
    innerList.style.marginLeft = `-${outer.clientWidth/2 * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});