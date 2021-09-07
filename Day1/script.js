
// 방법1 
// active인 기존 element를 기억하여 클릭시 전꺼 지우고 새로운 엘리먼트에 active class 추가

// const panels = document.querySelectorAll('.panel');

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     let activePanel = document.querySelector('.active');
//     activePanel.classList.remove('active')
//     panel.classList.add('active')
    
//   })
// })

// 방법2
// 버블링을 통하여 addEventListern 전부 위임하여 실행

// const container = document.querySelector('.container');
// const panels = document.querySelectorAll('.panel');


// container.addEventListenr('click', (event) => {
//   panels.forEach((panel) => {
//     panel.classList.remove('active')
//   })

//   event.target.classList.add('active')
// })

// 방법3
// 방법2와 방법 3을 합체

const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');
let activePanel = document.querySelector('.active');

container.addEventListener('click', (event) => {
  activePanel.classList.remove('active');

  event.target.classList.add('active');
  activePanel = event.target;
});