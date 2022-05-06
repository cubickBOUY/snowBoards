const a = document.querySelector('.burger')
const BurgerTop = document.querySelector('.header')


if (a) {
  const b = document.querySelector('.header__nav')
  const c = document.querySelector('html')
  a.addEventListener("click", function (e) {
    a.classList.toggle('_active');
    b.classList.toggle('_active');
    c.classList.toggle('_active')
  })
}

document.querySelector('.header__searchtab__imgMagnifier')
  .addEventListener('click',() =>
  {
    document.querySelector('.header__searchtab__Magnifier__poisk').classList.toggle('_active')
  })

