const navSlide = () => {
  const burger = document.querySelector('.mobile-main-menu') // Иконка бургера
  const nav = document.querySelector('.main-header__list_mobile') // Список меню
  const navLinks = document.querySelectorAll('.main-header__list_mobile li') // Каждый элемент списка

  // Движение списка
  burger.addEventListener('click', () => {
    nav.classList.toggle('main-header__list_mobile-active')

    // Анимация элементов списка
    navLinks.forEach((link, index) => {
      // console.log(index)
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `mainHeaderListFade 0.5s ease forwards ${index / 6 + 0.5}s`
      }
      // console.log(index / 7)
    })
    // Анимация бургера
    burger.classList.toggle('toggle-burger')
  })
}

navSlide()