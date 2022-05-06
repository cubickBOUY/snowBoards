let AccTriggers = document.querySelectorAll('.accordion__triggers-item')
let AccContent = document.querySelectorAll('.accordion__content-item')

AccTriggers.forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    // AutoClose
    if (parent.classList.contains('_active')) {
      parent.classList.remove('_active')
    } else {
      document
        .querySelectorAll('accordion__item')
        .forEach((child) => child.classList.remove('_active'))

        parent.classList.add('_active')
    }

    //Когда хочеш закроешь
    // parent.classList.toggle('_active')
  })
})