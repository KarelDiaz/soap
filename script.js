const buttons = document.querySelectorAll('.header__img');
const boxs = document.querySelectorAll('.main__box');

for (let i = 0; i < buttons.length; i++) {
  const b = buttons[i];
  b.addEventListener('click', () => {
    console.log(boxs[i]);
    window.scrollTo(0, boxs[i].offsetTop - 200)
  })
}